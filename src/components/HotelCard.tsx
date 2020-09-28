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
      <img src={image} alt='' />
      <p>{name}</p>
      <p>{price}</p>
    </Container>
  )
}

const Container = styled.div``
