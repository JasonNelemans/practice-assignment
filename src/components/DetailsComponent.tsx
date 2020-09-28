import React from 'react';

import AboutComponent from './AboutComponent';
import DisclaimerComponent from './DisclaimerComponent';
import FeaturesComponent from './FeaturesComponent';

interface Props {
  dealDetails: any;
}

export default function DetailsComponent({ dealDetails }: Props) {
  return (
    <div>
      <FeaturesComponent features={dealDetails?.features} />
      <AboutComponent content={dealDetails?.content} />
      <DisclaimerComponent disclaimer={dealDetails?.disclaimer} />
    </div>
  )
}
