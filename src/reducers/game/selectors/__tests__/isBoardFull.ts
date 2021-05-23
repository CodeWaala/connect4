import { BoardState } from "../../board";
import { isBoardFull } from "../isBoardFull";

describe("isBoardFull selector", () => {
  it("should return false when board is not full", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];

    expect(isBoardFull({ board, scoreBoard: {}})).toEqual(false);
    });

  it("should return true when board is full", () => {
    const board: BoardState = [
      ["red", "red", "red", "red", "red", "red", "red"],
      ["red", "red", "red", "red", "red", "red", "red"],
      ["red", "red", "red", "red", "red", "red", "red"],
      ["red", "red", "red", "red", "red", "red", "red"],
      ["red", "red", "red", "red", "red", "red", "red"],
      ["red", "red", "red", "red", "yellow", "red", "red"]
    ];

    expect(isBoardFull({ board, scoreBoard: {} })).toEqual(true);
  });
});
