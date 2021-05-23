import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { getBoard, getCurrentPlayer, getWinner, getIsBoardFull, getScoreBoard } from "../reducers/selectors";
import { Row } from "./Row";
import { dropCoin } from "../actions/dropCoin";
import { resetGame } from '../actions/resetGame';
import { Color, ButtonColor } from "../types";
import { Button } from "./Button";
import { updateScoreBoard } from "../actions/updateScoreBoard";
import { ScoreBoard } from "./ScoreBoard";

interface Props {
  board: ReturnType<typeof getBoard>;
  color: ReturnType<typeof getCurrentPlayer>;
  winner: ReturnType<typeof getWinner>;
  dropCoin: typeof dropCoin;
  isBoardFull: ReturnType<typeof getIsBoardFull>; // tells if board is full.
  resetGame: typeof resetGame; // reset the board game.
  updateScoreBoard: typeof updateScoreBoard; // updates the score board.
  scoreBoard: ReturnType<typeof getScoreBoard>; // get the score board.
}

export class BoardComponent extends React.Component<Props> {
  dropCoin = (column: number) => () => {
    const { winner, color, dropCoin } = this.props;
    // we only allow a player to drop a coin if there is no winner yet
    if (!winner) {
      dropCoin(column, color);
    }
  };

  displayHeader() {
    // only display the winner if there is one
    if (this.props.winner) {
      return <h2>Congratulations, {this.props.winner.color} wins the game!</h2>;
    } else {
      return <h2>It's {this.props.color}'s turn to play</h2>;
    }
  }

  displayRow = (colors: Color[], key: number) => {
    return (
      <Row
        row={key}
        dropCoin={this.dropCoin}
        colors={colors}
        key={`column-${key}`}
        winner={this.props.winner}
      />
    );
  };

  getButtonTextAndColor = (): { text: string, color: ButtonColor } => {
    const { isBoardFull, winner } = this.props;

    // If the game is on-going.
    if (!isBoardFull && !winner) {
      return {
        text: 'start over',
        color: 'red',
      }
    } else if (isBoardFull || winner) { // If the game is over.
      return {
        text: 'play again',
        color: 'green',
      }
    } else {
      return {
        text: 'reset',
        color: null,
      }
    }
  }

  render() {
    const classes = cn("Game-Board");
    const { board, resetGame, scoreBoard } = this.props;
    const { text, color } = this.getButtonTextAndColor();

    return (
      <>
        {this.displayHeader()}
        <div className="Game">
          <div className={classes}>{board.map(this.displayRow)}</div>
        </div>
        <div>
          <Button id={'gameButton'} text={text} onClick={resetGame} color={color} />
        </div>
        <p>
          <ScoreBoard scores={scoreBoard} />
        </p>
      </>
    );
  }

  componentDidUpdate(prevProps: Props): void {
    const { winner, updateScoreBoard } = this.props;
    const { winner: previousWinner } = prevProps;
    if (!previousWinner && winner) { // dispatch the action, to update the score card, because we have a winner....
      const { color: winningColor  } = winner;
      updateScoreBoard(winningColor);
    }
  }
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state),
  isBoardFull: getIsBoardFull(state),
  scoreBoard: getScoreBoard(state),
});

export const Board = connect(mapState, { dropCoin, resetGame, updateScoreBoard })(BoardComponent);
