import React from 'react'
import styled from 'styled-components';

interface Props {
  text: string;
  active: boolean;
  click: any;
}

export default function Button({ text, active, click }: Props) {
  return (
    <StyledButton active={active} onClick={click}>
      <p>{text}</p>
    </StyledButton>
  )
}

type ButtonProp = {
  active: boolean;
}


const StyledButton = styled.div<ButtonProp>`
  margin-left: 25px;
  cursor: pointer;

  p {
    margin: 0;
    font-weight: ${props => props.active ? 'bold' : 'lighter'};
    border-bottom: 2px solid ${props => props.active ? '#d8b379' : '#fff'}
  }
`
