import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalConfirm = (props) => {
  const { handleClose, show, dataUserDelete, handleDeleteUserFromModal } =
    props;

  const confirmDelete = async () => {
    let res = await deleteUser(dataUserDelete.id);
    if (res && +res.statusCode === 204) {
      toast.success("Delete user succeed!");
      handleClose();
      handleDeleteUserFromModal(dataUserDelete);
    } else {
      toast.error("Delete user error!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Delete a user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="body-add-new">
          This action can't be undone! Do you want to delete this user &nbsp;
          Email = <b> {dataUserDelete.email}</b> ?
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            confirmDelete();
          }}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
