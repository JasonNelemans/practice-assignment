import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

export default function DetailsBanner({ src }: Props) {
  return (
    <BannerContainer src={src} >
      Hello
    </BannerContainer>
  )
}

type BannerProp = {
  src: string;
}

const BannerContainer = styled.div<BannerProp>`
  background-image: ${props => (props.src ? `url(${props.src})` : "")};
  background-attachment: fixed;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  background-size: cover;
  scroll-behavior: smooth;

  height: 300px;
`