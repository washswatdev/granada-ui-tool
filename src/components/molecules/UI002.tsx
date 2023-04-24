//@ts-ignore
import styled from "styled-components/native";

const UI002 = () => {
  return (
    <Wrapper>
      <Title>Why do we use it?</Title>
      <Text>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </Text>
    </Wrapper>
  );
};

export default UI002;

const Wrapper = styled.View`
  width: 100%;
  height: 100px;
  border: 1px solid #cacaca;
  border-radius: 14px;
  padding: 10px 16px;
`;

const Title = styled.Text`
  font-size: 22px;
`;

const Text = styled.Text`
  font-size: 15px;
`;
