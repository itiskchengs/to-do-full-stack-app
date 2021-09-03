import { useState, useEffect } from "react";
import TodoForm from "../form/Form";
import axios from "axios";

const TodoApp = () => {

  /*
  - job:
    fetch todos from server
  - pass them to the TodoList
  - TodoForm
  */

  const [todo, setTodo] = useState({ title: "", completed: false });
  const [allTodos, setAllTodos] = useState([]);

  function handleInput(title) {
    setTodo({ ...todo, title });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAllTodos([...allTodos, todo])
    setTodo({ title: "", completed: false})
  }

  async function fetchTodos(){
    try {
      const response = await axios('/api/todos')
      setAllTodos(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => console.log(todo));
  useEffect(() => console.log(allTodos));
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <>
      <TodoForm
        todo={todo}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default TodoApp;
