// An action for resetting the game to an empty board.

export interface ResetGameAction {
  type: "RESET_GAME";
}

export function resetGame(): ResetGameAction {
  return {
    type: "RESET_GAME"
  };
}
