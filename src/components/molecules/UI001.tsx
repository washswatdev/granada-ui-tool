import styled from "styled-components";

const UI001 = () => {
  return (
    <Wrapper>
      <Image src="https://images.unsplash.com/photo-1681907624035-63bf2107301c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80" />
    </Wrapper>
  );
};

export default UI001;

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 14px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
