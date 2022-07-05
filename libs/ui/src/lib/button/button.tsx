import { HTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
  padding: 10px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  background: #ffd1d4;
  border-radius: 3px;
  border: 1px solid #ff5160;
`;

export function Button({ children, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
