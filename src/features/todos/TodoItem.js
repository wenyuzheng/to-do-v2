import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

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

const TickBox = ({ todo }) => {
  const dispatch = useDispatch();
  const onChangeHandler = () => {
    dispatch({ type: "todos/todoToggled", payload: todo.id });
  };

  return (
    <input type="checkbox" onChange={onChangeHandler} checked={todo.complete} />
  );
};

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch({ type: "todos/todoDeleted", payload: id });
  };
  return <button onClick={deleteHandler}>X</button>;
};

const TodoItem = ({ todoId }) => {
  const todo = useSelector(
    (state) => state.todos.find((e) => e.id === todoId),
    (a, b) => _.isEqual(a, b)
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <TickBox todo={todo} />
      <div style={{ color: todo.colour }}>{todo.text}</div>
      <ColourDropdown id={todo.id} />
      <DeleteButton id={todo.id} />
    </div>
  );
};

export default TodoItem;
