import { ScoreBoard } from "./scoreBoard";


/**
 * return empty ledger board. red and yellow both at 0 wins.
 */
export function getInitialScoreBoard(): ScoreBoard {
  const scoreBoard: ScoreBoard =  { 'red': 0, 'yellow': 0 };
  return scoreBoard;
}
