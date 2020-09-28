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

  console.log('ID: ', id);
  console.log('Hotels in Detail: ', hotels)
  console.log('Deals in Detail: ', deals)

  return (
    <DetailWrapper>
      <DetailsBanner />
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
`