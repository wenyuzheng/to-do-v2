import { useDispatch, useSelector } from "react-redux";

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

const ColourSelector = () => {
  const colours = ["red", "green", "blue", "orange"];
  const colourFilters = useSelector((state) => state.filters.colours);

  const dispatch = useDispatch();
  const onChangeHandler = (colour) => {
    if (colourFilters.includes(colour)) {
      dispatch({
        type: "filters/colourRemoved",
        payload: colour,
      });
    } else {
      dispatch({
        type: "filters/colourAdded",
        payload: colour,
      });
    }
  };

  return (
    <div>
      {colours.map((colour) => {
        return (
          <div key={colour}>
            <input
              type="checkbox"
              checked={colourFilters.includes(colour)}
              onChange={() => onChangeHandler(colour)}
            />
            {colour}
          </div>
        );
      })}
    </div>
  );
};

const Filter = () => {
  return (
    <div>
      <ShowingDropdown />
      <ColourSelector />
    </div>
  );
};

export default Filter;
