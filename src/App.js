import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Tables from "./components/Tables";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(true);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  };

  return (
    <div className="app-container">
      <Header />

      <Container>
        <div className="my-3 add-new">
          <strong>List Users: </strong>
          <button
            className="btn btn-success"
            onClick={() => setIsShowModalAddNew(true)}
          >
            Add new user
          </button>
        </div>
        <Tables />
      </Container>
      <ModalAddNew show={isShowModalAddNew} handleClose={handleClose} />
    </div>
  );
}

export default App;
