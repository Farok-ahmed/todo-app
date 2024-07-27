import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;
  return (
    <div>
      <ul className="main">
        {todos.map((todo, todoIndex) => {
          return (
            <TodoCard {...props} key={todoIndex} index={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
