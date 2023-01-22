import styled, { CSSObject } from '@emotion/styled';
import { GridStyleProps, gridStyles } from 'src/core/styles';
import { BoxProps, createBoxComponent } from '../box';

export type GridProps = BoxProps & GridStyleProps;

const createGridComponent = (props: GridProps) => [
  ...createBoxComponent(props),
  defaultGridStyles,
  gridStyles(props),
];

const defaultGridStyles: CSSObject = {
  display: "grid"
}

export const Grid = styled.div(createGridComponent);
