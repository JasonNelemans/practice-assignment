import React from 'react';

import SingleFeature from './SingleFeature';

interface Props {
  features: string[];
}

export default function FeaturesComponent({ features }: Props) {
  return (
    <div>
      <p><strong>Dit arrangement bevat</strong></p>
      {features?.map((feature, i) => <SingleFeature feature={feature} key={i} />)}
    </div>
  )
}
