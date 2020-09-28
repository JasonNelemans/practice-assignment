import React from 'react';
import styled from 'styled-components';

import HotelCard from './HotelCard';

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
  selectHotel: any;
}

export default function HotelsComponent({ allHotels, availableHotels, selectHotel }: Props) {
  const hotelNames = allHotels?.filter((hotel) => availableHotels.some((available) => hotel.code === available.id));

  const clickHandler = (hotel: any) => {
    selectHotel(hotel);
  }

  return (
    <Container>
      {hotelNames?.map(hotel =>
        <HotelCard name={hotel.name} image={hotel.photo} price={99} key={hotel.name} click={clickHandler} />
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 40px;
`
