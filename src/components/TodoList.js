import { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import ModalEditTodo from "./ModalEditTodo";
import "./TableUser.scss";
import { toast } from "react-toastify";

import _ from "lodash";
function TodoList() {
  const inputRef = useRef();
  const [todoNameValue, setTodoNameValue] = useState("");

  const [todoNameEditValue, setTodoNameEditValue] = useState("");

  const [editToDoModal, setEditTodoModal] = useState(false);

  const [todos, setTodos] = useState([
    { id: 1, todoName: "quét nhà" },
    { id: 2, todoName: "rửa chén" },
  ]);

  const handleClose = () => {
    setEditTodoModal(false);
  };

  const handleAddToDo = () => {
    let todo = {
      id: Math.floor(Math.random() * 1000),
      todoName: todoNameValue,
    };
    setTodos((prev) => [...prev, todo]);
    toast.success("Update user succeed!");

    setTodoNameValue("");
    inputRef.current.focus();
  };

  const handleChangeTodo = (e) => {
    setTodoNameValue(e.target.value);
  };

  const handleDeleteTodo = (todo) => {
    // let indexTodo = todos.indexOf(todo);

    // setTodos(todos.filter((item) => item.todoName !== todo.todoName));

    setTodos((todos) => {
      return todos.filter((item) => item.id !== todo.id);
    });
  };

  const handleEditTodo = (item) => {
    setTodoNameEditValue(item);
    setEditTodoModal(true);
  };

  // const handleEditTodoValue = (e) => {
  //   setTodoNameEditValue(e.target.value);
  // };

  const handleEditUserFromModal = (user) => {
    let cloneTodo = _.cloneDeep(todos);

    let index = todos.findIndex((item) => item.id === user.id);

    cloneTodo[index].todoName = user.todoName;

    setTodos(cloneTodo);
  };

  return (
    <>
      <div className="my-3 add-new">
        <strong>To do lists: </strong>
      </div>
      <div className="form-todo">
        <div className="col-4 my-3 ">
          <input
            ref={inputRef}
            className="form-control "
            placeholder="add new todo....."
            value={todoNameValue}
            onChange={handleChangeTodo}
          />
        </div>
        <button className="btn btn-success" onClick={handleAddToDo}>
          Add{" "}
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={`users-${index}`}>
              <td> {item.id} </td>
              <td>{item.todoName}</td>
              <td>
                <button
                  className="btn btn-warning mx-3"
                  onClick={() => handleEditTodo(item)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTodo(item)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalEditTodo
        show={editToDoModal}
        handleClose={handleClose}
        todoNameEditValue={todoNameEditValue}
        handleEditUserFromModal={handleEditUserFromModal}
      />
    </>
  );
}

export default TodoList;
