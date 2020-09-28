import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  image: string;
  price: number;
}

export default function HotelCard({ name, image, price }: Props) {
  return (
    <Container>
      <img src={image} alt='' width='75px' />
      <Text>
        <p id='header'>{name}</p>
        <p id='price'>Vanaf {price},- per persoon</p>
      </Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  margin: 15px;
  margin-left: 0px;
  width: 375px;
  height: 75px;
  border-radius: 3px;
  box-shadow: 0px 7px 45px 0px rgba(0,0,0,0.1);

  cursor: pointer;

  img {
    border-radius: 3px 0px 0px 3px;
  }

  &:hover {
    opacity: 0.6;
  }
`

const Text = styled.div`
  margin-left: 15px;

  #header {
    font-weight: bold;
    margin-bottom: 10px;
  }

  #price {
    margin-top: 5px;
    font-size: 12px;
  }
`