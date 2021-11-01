import styled from "styled-components";

const Container = styled.div`
background-color: coral;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.padding.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 10vh;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Some Quote Here</h1>
      </Wrapper>
    </Container>
  );
};

export default Contact;
