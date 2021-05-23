import React from 'react';
import cn from "classnames";
import { ButtonColor } from '../types';

interface Props {
    color: ButtonColor;
    text: string;
    id: string;
    onClick: () => void;
}

export const Button: React.StatelessComponent<Props> = ({
    color,
    text,
    id,
    onClick
  }) => {
    const classes = cn("Game-button", color);
      return (
        <button className={classes} data-testid={id} onClick={onClick}>{text}</button>
      );
  };



