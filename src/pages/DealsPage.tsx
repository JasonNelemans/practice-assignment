import React from 'react'

type Hotel = {
  id: string;
  price: number;
}

type Deal = {
  content: string;
  description: string;
  disclaimer: string;
  features: string[];
  hotels: Hotel[];
  image: string;
  price: number;
  title: string;
}

interface Props {
  deals: Deal[];
}

export default function DealsPage({ deals }: Props) {

  console.log('deals in dealsPage: ', deals);

  return (
    <div>
      This is the deals page
    </div>
  )
}
