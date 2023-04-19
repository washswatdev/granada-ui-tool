import React from "react";
import "./App.css";
import styled from "styled-components";

//@ts-ignore
import { Text } from "react-native-web";
import { Molecules } from "./components";

function App() {
  return (
    <Wrapper>
      <ContainerWrapper>
        <Molecules />
      </ContainerWrapper>
      <ContainerWrapper></ContainerWrapper>
      <ContainerWrapper></ContainerWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex: 1;
  background-color: #fff;
`;

const ContainerWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  border: 1px solid #ababab;
`;
