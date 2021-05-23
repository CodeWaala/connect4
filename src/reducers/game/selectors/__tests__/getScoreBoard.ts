import { BoardState } from "../../board";
import { getScoreBoard } from "../../../selectors";

describe("getScoreBoard selector", () => {
  it("should return score board correctly", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];

    expect(getScoreBoard({ game: { board, scoreBoard: { 'red': 1, 'yellow': 3}}})).toEqual({ 'red': 1, 'yellow': 3});
    });
});
