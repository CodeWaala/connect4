import React from 'react';
import cn from "classnames";
import { ScoreBoard as Scores } from '../reducers/game/scoreBoard';

export interface Props {
    scores: Scores;
}
export const ScoreBoardComponent: React.StatelessComponent<Props> = ({
    scores
  }) => {
    const classes = cn("Game-ScoreBoard");
    const {red, yellow} = scores;
    return(
       <div className={classes}>
            <table>
                <thead>
                <tr>
                    <th>Red</th>
                    <th>Yellow</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{red}</td>
                    <td>{yellow}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  };



