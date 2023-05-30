import { useDispatch } from "react-redux";

const ColourDropdown = ({ id }) => {
  const colours = ["", "red", "green", "blue", "orange"];
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch({
      type: "todos/todoColoured",
      payload: { id: id, colour: e.target.value },
    });
  };

  return (
    <select onChange={(e) => onChangeHandler(e)}>
      {colours.map((colour) => (
        <option key={colour} value={colour}>
          {colour}
        </option>
      ))}
    </select>
  );
};

const TickBox = ({ id }) => {
  const dispatch = useDispatch();
  const onChangeHandler = () => {
    dispatch({ type: "todos/todoToggled", payload: id });
  };

  return <input type="checkbox" onChange={onChangeHandler} />;
};

const TodoItem = ({ todo }) => {
  return (
    <div style={{ display: "inline-flex" }}>
      <TickBox id={todo.id} />
      <div style={{ color: todo.colour }}>{todo.text}</div>
      <ColourDropdown id={todo.id} />
    </div>
  );
};

export default TodoItem;
