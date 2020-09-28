import React from 'react'

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
  hotels: any;
}

export default function DealsPage({ deals, hotels }: Props) {

  console.log('deals in dealsPage: ', deals);
  console.log('hotels in dealspage: ', hotels);

  return (
    <div>
      This is the deals page
    </div>
  )
}
