import { reducer, ScoreBoard } from "../scoreBoard";

describe("update score board", () => {
  it("should work correctly", () => {
    const state: ScoreBoard = {'red': 0, 'yellow': 0};

    const newState = reducer(state, {
        type: "UPDATE_SCORE_BOARD",
        payload: {
            color: 'red',
        }
    });

    expect(newState).toEqual({'red': 1, 'yellow': 0});
  });
});
