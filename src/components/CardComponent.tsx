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
        <CardImageContainer>
          <img src={deal.image} alt='deal' />
          <p>Beschikbaar voor {deal.hotels.length} hotels</p>
        </CardImageContainer>
        <CardDescriptionContainer>
          <div className='text'>
            <h4>{deal.title}</h4>
            <p>{deal.description}</p>
            <p id='price-text'>p.p. vanaf <span><strong>{deal.price / 100},-</strong></span></p>
          </div>
        </CardDescriptionContainer>
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

const CardImageContainer = styled.div`
  position: relative;
  img {
    width: 280px;
    border-radius: 3px 3px 0 0;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 10px;
    color: white;
  }
`
const CardDescriptionContainer = styled.div`
  height: 100%;

  .text {
    margin: 10px;
  }

  h4 {
    margin: 0;
  }

  p {
    font-size: 12px;
  }

  #price-text {
    margin-left: 160px;
  }

  span {
    font-size: 20px;
  }
`