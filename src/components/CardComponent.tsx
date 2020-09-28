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
    <CardWrapper>
      <CardContainer>
        <div>
          <img src={deal.image} alt='deal' />
        </div>
        <div>
          <h4>{deal.title}</h4>
          <p>{deal.description}</p>
          <p>p.p. vanaf <span><strong>{deal.price / 100},-</strong></span></p>
        </div>
      </CardContainer>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 280px;
  height: 260px;
  border-radius: 3px;
  box-shadow: 0px 7px 45px 0px rgba(0,0,0,0.1);

  margin-rigt: 20px;
`

const CardContainer = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`
