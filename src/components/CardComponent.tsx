import React from 'react';
import styled from 'styled-components';

type AvailableHotel = {
  id: string;
  price: number;
  length: number;
}

type Deal = {
  deal: {
    content: string;
    description: string;
    disclaimer: string;
    features: string[];
    hotels: AvailableHotel[];
    image: string;
    price: number;
    title: string;
    __proto__: any;
  }
}

export default function CardComponent({ deal }: Deal) {
  console.log('deal in Card: ', deal);
  return (
    <div>
      This is the card component
    </div>
  )
}
