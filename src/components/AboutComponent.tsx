import React from 'react';
import styled from 'styled-components';

interface Props {
  content: string;
}

export default function AboutComponent({ content }: Props) {
  return (
    <AboutWrapper>
      <p><strong>Over dit arrangement</strong></p>
      <p>{content}</p>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  margin-top: 35px;
  white-space: pre-line;
  line-height: 1.4;
`