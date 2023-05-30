import { useDispatch } from "react-redux";

const ShowingDropdown = () => {
  const showings = ["All", "Completed", "Incomplete"];
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch({
      type: "filters/showingChanged",
      payload: e.target.value,
    });
  };

  return (
    <select onChange={(e) => onChangeHandler(e)}>
      {showings.map((showing) => (
        <option key={showing} value={showing}>
          {showing}
        </option>
      ))}
    </select>
  );
};

const Filter = () => {
  return (
    <div>
      <ShowingDropdown />
    </div>
  );
};

export default Filter;
