import React from "react";

//@ts-ignore
import styled from "styled-components/native";

const index = () => {
  return (
    <Wrapper>
      <Molecule1>
        <Title>Title</Title>
        <Text>Description</Text>
      </Molecule1>
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.View`
  flex: 1;
  height: 100%;
  margin: 20px;
`;

const Molecule1 = styled.View`
  width: 100%;
  height: 100px;
  border: 1px solid #cacaca;
`;

const Title = styled.Text`
  font-size: 18px;
`;

const Text = styled.Text`
  font-size: 16px;
`;
