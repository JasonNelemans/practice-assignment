import React from 'react';
import styled from 'styled-components';

import CardComponent from '../components/CardComponent';

// type AvailableHotel = {
//   id: string;
//   price: number;
// }

// type Deal = {
//   content: string;
//   description: string;
//   disclaimer: string;
//   features: string[];
//   hotels: AvailableHotel[];
//   image: string;
//   price: number;
//   title: string;
//   proto: any;
//   length: any;
// }

// type AllHotel = {
//   code: string;
//   group: string;
//   lat: number;
//   lon: number;
//   name: string;
//   photo: string;
//   rating: { avg: string, nr: number }
//   proto: any;
//   length: any;
// }

// interface Props {
//   deals: Deal[];
//   hotels: AllHotel[]
// }

interface Props {
  deals: any;
}

export default function DealsPage({ deals }: Props) {
  console.log('deals in dealsPage: ', deals);

  return (
    <DealsWrapper>
      <h1>Top zomer deals</h1>
      <DealsContainer>
        {deals.data?.map((deal: any, i: number) => {
          return (
            <div className='card' key={i}>
              <CardComponent deal={deal} />
            </div>
          )
        })}
      </DealsContainer>
    </DealsWrapper>
  )
}

const DealsWrapper = styled.div`
  margin: 20px;
`
const DealsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 50px;

  .card {
    flex: 0 0 auto;
  }
`