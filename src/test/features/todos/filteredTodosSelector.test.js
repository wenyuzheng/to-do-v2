import filteredTodosSelector, {
  filterTodosColour,
  filterTodosShowing,
} from "../../../features/todos/filteredTodosSelector";

describe("filteredTodoSelector", () => {
  describe("filter showing", () => {
    test("filter completed", () => {
      const todos = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: false },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "Completed",
        colours: [],
      };
      const expected = [{ id: 0, text: "todo1", complete: true }];
      const result = filterTodosShowing(todos, filters.showing);
      expect(result).toEqual(expected);
    });

    test("filter incomplete", () => {
      const todos = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: false },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "Incomplete",
        colours: [],
      };
      const expected = [
        { id: 1, text: "todo2", complete: false },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const result = filterTodosShowing(todos, filters.showing);
      expect(result).toEqual(expected);
    });

    test("filter all", () => {
      const todos = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: false },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "All",
        colours: [],
      };
      const expected = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: false },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      expect(filterTodosShowing(todos, filters.showing)).toEqual(expected);
    });
  });

  describe("filter colour", () => {
    test("filter one colour", () => {
      const todos = [
        { id: 0, text: "todo1", complete: false },
        { id: 1, text: "todo2", complete: false, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "All",
        colours: ["red"],
      };
      const expected = [
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const result = filterTodosColour(todos, filters.colours);
      expect(result).toEqual(expected);
    });

    test("filter multi colours", () => {
      const todos = [
        { id: 0, text: "todo1", complete: false },
        { id: 1, text: "todo2", complete: false, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "All",
        colours: ["red", "yellow"],
      };
      const expected = [
        { id: 1, text: "todo2", complete: false, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const result = filterTodosColour(todos, filters.colours);
      expect(result).toEqual(expected);
    });
  });

  describe("filter colour and showing", () => {
    test("filter one colour and completed", () => {
      const todos = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: false, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "Completed",
        colours: ["red"],
      };
      const expected = [];
      const result = filteredTodosSelector(todos, filters);
      expect(result).toEqual(expected);
    });

    test("filter one colour and incomplete", () => {
      const todos = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: false, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "Incomplete",
        colours: ["red"],
      };
      const expected = [
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const result = filteredTodosSelector(todos, filters);
      expect(result).toEqual(expected);
    });

    test("filter multi colour and incomplete", () => {
      const todos = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: true, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "Incomplete",
        colours: ["red", "yellow"],
      };
      const expected = [
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const result = filteredTodosSelector(todos, filters);
      expect(result).toEqual(expected);
    });

    test("filter multi colour and all", () => {
      const todos = [
        { id: 0, text: "todo1", complete: true },
        { id: 1, text: "todo2", complete: true, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const filters = {
        showing: "All",
        colours: ["red", "yellow"],
      };
      const expected = [
        { id: 1, text: "todo2", complete: true, colour: "yellow" },
        { id: 2, text: "todo3", complete: false, colour: "red" },
      ];
      const result = filteredTodosSelector(todos, filters);
      expect(result).toEqual(expected);
    });
  });
});
