import { Color } from "../types";

// An action for updating the score board.

export interface UpdateScoreBoard {
    type: "UPDATE_SCORE_BOARD";
    payload: {
        color: Color;
    };
}

export function updateScoreBoard(color: Color): UpdateScoreBoard {
    return {
        type: "UPDATE_SCORE_BOARD",
        payload: { color }
    };
  }