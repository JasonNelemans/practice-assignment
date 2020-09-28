import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

export default function DetailsBanner({ src }: Props) {
  console.log('src: ', src);
  return (
    <BannerContainer >
      Hello
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
`