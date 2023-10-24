import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Tables from "./components/Tables";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <div className="app-container">
        {/* <Header /> */}

        <Container>
          <Tables />
          <TodoList />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
