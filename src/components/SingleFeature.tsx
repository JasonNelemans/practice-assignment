import React from 'react'
import { BsCheck } from 'react-icons/bs';

interface Props {
  feature: string;
}

export default function SingleFeature({ feature }: Props) {
  return (
    <p><BsCheck color='#51c487' /> {feature} </p>
  )
}
