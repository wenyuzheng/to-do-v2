import filtersReducer from "../../../features/filters/filtersReducer";

describe("Filters reducer", () => {
  test("filters/showingChanged", () => {
    const state = { showing: "All" };
    const action = { type: "filters/showingChanged", payload: "Completed" };
    const expected = { showing: "Completed" };
    expect(filtersReducer(state, action)).toEqual(expected);
  });

  test("filters/colourAdded", () => {
    const state = { colours: [] };
    const action = { type: "filters/colourAdded", payload: "yellow" };
    const expected = { colours: ["yellow"] };
    expect(filtersReducer(state, action)).toEqual(expected);
  });

  test("filters/colourRemoved", () => {
    const state = { colours: ["yellow", "red"] };
    const action = { type: "filters/colourRemoved", payload: "yellow" };
    const expected = { colours: ["red"] };
    expect(filtersReducer(state, action)).toEqual(expected);
  });

  test("filters/coloursCleared", () => {
    const state = { colours: ["yellow", "red"] };
    const action = { type: "filters/coloursCleared" };
    const expected = { colours: [] };
    expect(filtersReducer(state, action)).toEqual(expected);
  });
});
