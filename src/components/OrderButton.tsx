import React from 'react';
import styled from 'styled-components';

interface Prop {
  hotelOrder: any;
}

export default function OrderButton({ hotelOrder }: Prop) {
  const message = () => {
    if (hotelOrder === '') {
      alert('Kies eerst een hotel aub.')
    } else {
      alert(`U heeft gekozen voor: ${hotelOrder}`)
    }
  }

  return (
    <Container onClick={message}>
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
