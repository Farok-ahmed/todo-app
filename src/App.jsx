import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Eat more Fruits and vege",
    "Pick up the kids from sechool",
  ]);
  const [todoValue, setTodoValue] = useState("");
  const handleAddTodos = (newTodo) => {
    const newTodosList = [...todos, newTodo];
    setTodos(newTodosList);
  };

  function handleDeleteTodo(index) {
    const newTodosList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodosList);
  }
  const handleEditTodo = (index) => {
    const valuToBeEdited = todos[index];
    setTodoValue(valuToBeEdited);
    handleDeleteTodo(index);
  };
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
