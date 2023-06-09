import _ from "lodash";

const initialState = {
  showing: "All",
  colours: [],
};

export default (state = initialState, action) => {
  const copy = _.cloneDeep(state);

  switch (action.type) {
    case "filters/showingChanged":
      copy.showing = action.payload;
      return copy;

    case "filters/colourAdded":
      copy.colours.push(action.payload);
      return copy;

    case "filters/colourRemoved":
      const index = copy.colours.indexOf(action.payload);
      copy.colours.splice(index, 1);
      return copy;

    case "filters/coloursCleared":
      copy.colours = [];
      return copy;

    case "filters/reset":
      return initialState;

    default:
      return state;
  }
};
