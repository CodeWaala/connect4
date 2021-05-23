import { combineReducers } from "redux";

import { reducer as game } from "./game";

export const rootReducer = combineReducers({
  game: game
});

export type RootState = ReturnType<typeof rootReducer>;
