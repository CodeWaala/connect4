import { DropCoinAction } from "./dropCoin";
import { ResetGameAction } from "./resetGame";
import { UpdateScoreBoard } from "./updateScoreBoard";

export type Action = DropCoinAction | ResetGameAction | UpdateScoreBoard;
