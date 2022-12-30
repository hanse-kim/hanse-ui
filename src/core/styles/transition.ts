import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export type TransitionProps = {
  transition?: CSSProperties['transition'];
  transitionDelay?: CSSProperties['transitionDelay'];
  transitionDuration?: CSSProperties['transitionDuration'];
  transitionProperty?: CSSProperties['transitionProperty'];
  transitionTimingFunction?: CSSProperties['transitionTimingFunction'];
};

export const transitionStyles = (props: TransitionProps) => {
  const {
    transition,
    transitionDelay,
    transitionDuration,
    transitionProperty,
    transitionTimingFunction,
  } = props;

  return css({
    transition: transition,
    transitionDelay: transitionDelay,
    transitionDuration: transitionDuration,
    transitionProperty: transitionProperty,
    transitionTimingFunction: transitionTimingFunction,
  });
};