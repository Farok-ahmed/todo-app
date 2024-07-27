function TodoInput({ handleAddTodos, todoValue, setTodoValue }) {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          if (todoValue !== "") {
            handleAddTodos(todoValue);
          }
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

export default TodoInput;
