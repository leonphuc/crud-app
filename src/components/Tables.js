import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import { fectchAllUser } from "../services/UserService";
import ModalAddNew from "./ModalAddNew";

function Tables(props) {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  };
  const handleUpdateTable = (user) => {
    listUsers.data.unshift(user);
  };

  console.log("listUsers", listUsers);

  // thêm đối tượng mới vào đầu mảng data

  useEffect(() => {
    getUser(1);
  }, []);

  const getUser = async (page) => {
    let res = await fectchAllUser(page);
    if (res && res.data) {
      setListUsers(res);
      setTotalUsers(res.total);
      setTotalPages(res.total_pages);
    }
  };

  const handlePageClick = (e) => {
    getUser(+e.selected + 1);
  };

  return (
    <>
      <div className="my-3 add-new">
        <strong>List Users: </strong>
        <button
          className="btn btn-success"
          onClick={() => setIsShowModalAddNew(true)}
        >
          Add new user
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.data &&
            listUsers.data.length > 0 &&
            listUsers.data.map((item, index) => (
              <tr key={`users-${index}`}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={handleClose}
        handleUpdateTable={handleUpdateTable}
      />
    </>
  );
}

export default Tables;
