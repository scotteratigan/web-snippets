import React from "react";
import styled from "styled-components";

export default function CodeInput({ codeType, code, setCode, editorTabs }) {
  function editorWidth() {
    switch (editorTabs) {
      case 1:
        return "90vw";
      case 2:
        return "45vw";
      case 3:
      default:
        return "30vw";
    }
  }
  return (
    <div>
      <h2>{codeType}</h2>
      <TextArea
        spellCheck={false}
        value={code}
        onChange={e => setCode(e.target.value)}
        style={{ width: editorWidth(), margin: `0 10px` }}
      ></TextArea>
    </div>
  );
}

const TextArea = styled.textarea`
  background-color: #111;
  color: #eee;
  border: 1px solid #eee;
  height: 40vh;
  border-radius: 3px;
  padding: 3px;
`;
