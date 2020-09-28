import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import DetailsBanner from '../components/DetailsBanner';
import DetailsComponent from '../components/DetailsComponent';

interface Props {
  deals: any;
  hotels: any;
}

export default function DealsDetailPage({ deals, hotels }: Props) {
  const { id } = useParams<any>();
  const indexNum = id - 1;

  const dealDetails = deals.data?.find((deal: any, i: number) => {
    if (indexNum === i) return deal
  })

  console.log('ID: ', id);
  console.log('Hotels in Detail: ', hotels)
  console.log('Deals in Detail: ', deals)

  return (
    <DetailWrapper>
      <DetailsBanner src={dealDetails?.image} />
      <div className='description-container'>
        <div className='header-text'>
          <h1>{dealDetails?.title}</h1>
          <p>{dealDetails?.description}</p>
          <p>Vanaf {dealDetails?.price / 100},- per persoon</p>
        </div>
        <DetailsComponent dealDetails={dealDetails} />
      </div>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`

  .description-container {
    margin: 20px;
    width: 400px;

  }  

  .header-text {

    h1 {
      margin-bottom: 15px;
    }

    #desc {
      margin: 0;
      font-size: 18px;
    }

    #price {
      font-size: 20px;
      margin-top: 15px;
    }
  }
`