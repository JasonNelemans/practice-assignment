import React from 'react'
import { useParams } from 'react-router-dom';

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
    <div>
      Simple DealsDetailPage
    </div>
  )
}
