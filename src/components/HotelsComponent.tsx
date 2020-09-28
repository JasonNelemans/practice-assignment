import React from 'react';
import styled from 'styled-components';

type availableHotels = {
  id: string;
  price: number;
}

type allHotels = {
  name: string;
  code: string;
  group: string;
  lat: number;
  lon: number;
  photo: string;
  rating: { avg: string, nr: number };
}

interface Props {
  availableHotels: availableHotels[];
  allHotels: allHotels[];
}

export default function HotelsComponent({ allHotels, availableHotels }: Props) {
  console.log('allHotels: ', allHotels);
  console.log('availableHotels: ', availableHotels);
  return (
    <Container>
      This is the HotelsComponent
    </Container>
  )
}

const Container = styled.div`
  margin-top: 40px;
`
