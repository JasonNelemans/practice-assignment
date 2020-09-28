import React from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import DetailsBanner from '../components/DetailsBanner';

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
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
`