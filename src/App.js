import logo from "./logo.svg";
import "./App.css";
import TodoList from "./features/todos/TodoList";
import AddTodo from "./features/todos/AddTodo";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
