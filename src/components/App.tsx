import React from "react";
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <AppDiv>
      <AppHeader>
        <p>React App Rewired</p>
      </AppHeader>
    </AppDiv>
  );
}

export default App;
