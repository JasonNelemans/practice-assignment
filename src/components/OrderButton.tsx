import React from 'react';
import styled from 'styled-components';

export default function OrderButton() {
  return (
    <Container>
      <div className='text'>
        <p>Nu boeken</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  width: 100%;
  height: 60px;
  background-color: #ff7e00;
  text-align: center;

  cursor: pointer;

  p {
    color: white;
  }

  &:hover {
    opacity: 0.9;
  }
`
