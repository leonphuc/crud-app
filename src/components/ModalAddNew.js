import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalAddNew = (props) => {
  const { handleClose, show } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleSaveUser = () => {
    console.log("name: ", name);
    console.log("job: ", job);
  };
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add new user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="body-add-new">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Job
            </label>
            <input
              type="text"
              className="form-control"
              value={job}
              onChange={(e) => setJob(e.target.value)}
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
            handleSaveUser();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddNew;
