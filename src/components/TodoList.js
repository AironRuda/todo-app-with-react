import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  //   console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
