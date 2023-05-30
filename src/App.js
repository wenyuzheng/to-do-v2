import logo from "./logo.svg";
import "./App.css";
import TodoList from "./features/todos/TodoList";
import AddTodo from "./features/todos/AddTodo";
import Filter from "./features/filters/Filter";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
