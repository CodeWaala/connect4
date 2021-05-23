import { LocalState } from "..";

/**
 * Check if the board is full or not.
 * Board is full, when there is coin (not null) in every cell.
 */
export function isBoardFull(state: LocalState): boolean {
  const isBoardFull = true

  for (const row of state.board) {
    for (const cell of row) {
      if (cell === null) {
        return false;
      }
    }
  }

  return isBoardFull;
}
