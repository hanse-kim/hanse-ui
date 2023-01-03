import { css } from "@emotion/react";
import { CSSProperties } from "react";

export type GridItemProps = {
  gridArea?: CSSProperties['gridArea'];

  gridRow?: CSSProperties['gridRow'];
  gridRowStart?: CSSProperties['gridRowStart'];
  gridRowEnd?: CSSProperties['gridRowEnd'];

  gridColumn?: CSSProperties['gridColumn'];
  gridColumnStart?: CSSProperties['gridColumnStart'];
  gridColumnEnd?: CSSProperties['gridColumnEnd'];
};

export const gridItemStyles = (props: GridItemProps) => {
  return css(props);
}