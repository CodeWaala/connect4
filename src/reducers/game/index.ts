import { reducer as board } from "./board";
import { reducer as scoreBoard } from "./scoreBoard";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  board,
  scoreBoard,
});

export type LocalState = ReturnType<typeof reducer>;
