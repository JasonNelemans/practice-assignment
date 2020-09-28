import React from 'react';
import styled from 'styled-components';

interface Props {
  disclaimer: string;
}

export default function DisclaimerComponent({ disclaimer }: Props) {
  return (
    <Wrapper>
      <p><em>{disclaimer}</em></p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 30px;
  color: #333;
`
