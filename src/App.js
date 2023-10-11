import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Tables from "./components/Tables";

function App() {
  return (
    <>
      <Header />

      <Container>
        <Tables />
      </Container>
    </>
  );
}

export default App;
