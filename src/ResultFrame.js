import React from 'react';
import styled from 'styled-components';

export default function ResultFrame({ code }) {
  const src = 'data:text/html,' + encodeURIComponent(code);
  return (
    <>
      <IframeHeader>Result</IframeHeader>
      <ResultIframe src={src} />
    </>
  );
}

const IframeHeader = styled.h2`
  text-align: center;
  font-size: 1.5rem;
`;

const ResultIframe = styled.iframe`
  display: block;
  background-color: white;
  color: black;
  width: 90vw;
  height: 35vh;
  margin: 1rem auto;
`;
