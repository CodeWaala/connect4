import { RootState } from ".";

import * as fromBoard from "./game/selectors";
import { ScoreBoard } from "./game/scoreBoard";

export const getBoard = (state: RootState) => fromBoard.getBoard(state.game);
export const getCurrentPlayer = (state: RootState) =>
  fromBoard.getCurrentPlayer(state.game);
export const getWinner = (state: RootState) => fromBoard.getWinner(state.game);
export const getIsBoardFull = (state: RootState): boolean => fromBoard.isBoardFull(state.game);
export const getScoreBoard = (state: RootState): ScoreBoard => state.game.scoreBoard;
