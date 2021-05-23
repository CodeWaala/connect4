import { getInitialScoreBoard } from "./getInitialScoreBoard";
import { Action } from "../../actions/types";


export type ScoreBoard = { [color: string]: number};

const initialState: ScoreBoard = getInitialScoreBoard();

export const reducer = (
  state: ScoreBoard = initialState,
  action: Action
): ScoreBoard => {
  switch (action.type) {
    case "UPDATE_SCORE_BOARD":
      const { color } = action.payload;
      if (color !== null) {
        const currentWinningCountForTheColor = state[color];
        return { ...state, [color]: currentWinningCountForTheColor + 1 };
      } else {
        return {...state};
      }
    default:
      return state;
  }
};
