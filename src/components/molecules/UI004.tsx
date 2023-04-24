import styled from "styled-components";

const UI004 = () => {
  return (
    <Wrapper>
      <Text>UI004</Text>
    </Wrapper>
  );
};

export default UI004;

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: #32cdbb;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.text`
  font-size: 36px;
`;
