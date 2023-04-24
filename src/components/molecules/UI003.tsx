import styled from "styled-components";

const UI003 = () => {
  return (
    <Wrapper>
      <Text>UI003</Text>
    </Wrapper>
  );
};

export default UI003;

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: yellowgreen;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.text`
  font-size: 36px;
`;
