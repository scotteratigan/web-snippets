import React, { useState } from 'react';
import styled from 'styled-components';
import CodeInput from './CodeInput';
import ResultFrame from './ResultFrame';
import defaultCode from './defaultCode.json';
import parserBabel from 'prettier/parser-babylon';
import parserPostCSS from 'prettier/parser-postcss';
import parserHTML from 'prettier/parser-html';
import prettier from 'prettier/standalone';

export default function App() {
  const [html, setHTML] = useState(defaultCode.html);
  const [css, setCSS] = useState(defaultCode.css);
  const [js, setJS] = useState(defaultCode.js);
  const [iFrameCode, setiFrameCode] = useState('');
  function updateIframe() {
    const code = `
    <html>
      <head>
        <style>
          ${css}
        </style>
      </head>
      <body>
      ${html}
      <script>
        document.addEventListener("DOMContentLoaded", () => {
          ${js}
        });
      </script>
      </body>
    </html>
      `;
    setiFrameCode(code);
  }
  function clearIframe() {
    setiFrameCode('');
  }
  function formatCode() {
    const newHTML = prettier.format(html, {
      parser: 'html',
      plugins: [parserHTML],
    });
    const newCSS = prettier.format(css, {
      parser: 'css',
      plugins: [parserPostCSS],
    });
    const newJS = prettier.format(js, {
      parser: 'babel',
      plugins: [parserBabel],
    });
    setHTML(newHTML);
    setCSS(newCSS);
    setJS(newJS);
  }
  return (
    <AppDiv>
      <PageHeader>Web Snippet Tester</PageHeader>
      <CodingArea>
        <CodeInput codeType='HTML' code={html} setCode={setHTML} />
        <CodeInput codeType='CSS' code={css} setCode={setCSS} />
        <CodeInput codeType='JavaScript' code={js} setCode={setJS} />
      </CodingArea>
      <ControlArea>
        <ControlButton onClick={formatCode}>Format Code</ControlButton>
        <ControlButton onClick={updateIframe}>Update iFrame</ControlButton>
        <ControlButton onClick={clearIframe}>Clear iFrame</ControlButton>
      </ControlArea>
      <ResultFrame code={iFrameCode} />
    </AppDiv>
  );
}

const CodingArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;
`;

const AppDiv = styled.div``;

const PageHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const ControlArea = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

const ControlButton = styled.button`
  background-color: #e2e2e2;
  color: black;
  border: 1px solid silver;
  border-radius: 3px;
  margin: 0 1rem;
  padding: 0.2rem 0.6rem;
`;
