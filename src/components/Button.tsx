import React from 'react'
import styled from 'styled-components';

interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}
