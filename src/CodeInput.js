import React from 'react';
import styled from 'styled-components';

export default function CodeInput({ codeType, code, setCode }) {
  return (
    <div>
      <h2>{codeType}</h2>
      <TextArea spellCheck={false} value={code} onChange={e => setCode(e.target.value)}></TextArea>
    </div>
  );
}

const TextArea = styled.textarea`
  background-color: #111;
  color: #eee;
  border: 1px solid #eee;
  height: 40vh;
  width: 30vw;
  border-radius: 3px;
  padding: 3px;
`;
