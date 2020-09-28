import React from 'react';

import FeaturesComponent from './FeaturesComponent';

interface Props {
  dealDetails: any;
}

export default function DetailsComponent({ dealDetails }: Props) {
  console.log('deal Details in DetailsComp: ', dealDetails);

  return (
    <div>
      <FeaturesComponent />
    </div>
  )
}
