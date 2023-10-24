import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putUpdateUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalEditTodo = (props) => {
  const { handleClose, show, todoNameEditValue, handleEditUserFromModal } =
    props;

  const [todo, setTodo] = useState("");

  const handleEditUser = () => {
    handleEditUserFromModal({ todoName: todo, id: todoNameEditValue.id });
    handleClose();
    toast.success("Update user succeed!");
  };

  useEffect(() => {
    if (show) {
      setTodo(todoNameEditValue.todoName);
    }
  }, [todoNameEditValue]);

  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit To do name</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="body-add-new">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              To do name
            </label>
            <input
              type="text"
              className="form-control"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleEditUser();
          }}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEditTodo;
