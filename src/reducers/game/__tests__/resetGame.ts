import { BoardState, reducer } from "../board";

describe("reset game function", () => {
  it("empties the board", () => {
    const state: BoardState = [
      [null, null, null, null, null, "yellow", null],
      [null, null, null, null, null, "red", null],
      [null, null, null, null, null, "yellow", null],
      [null, null, null, null, null, "red", null],
      [null, null, null, null, null, "yellow", null],
      [null, null, null, null, null, "red", null]
    ];

    const newState = reducer(state, {
        type: "RESET_GAME"
    });

    expect(newState).toEqual([
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]);
  });
});
