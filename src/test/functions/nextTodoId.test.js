import nextTodoId from "../../functions/nextTodoId";

describe("Next Todo Id", () => {
  test("Eg 1", () => {
    const todos = [{ id: 0, id: 1, id: 2 }];
    expect(nextTodoId(todos)).toEqual(3);
  });
});
