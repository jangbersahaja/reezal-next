import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => theme.padding.default};
`;

const SectionTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #37517e;
  text-align: center;

  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  margin: 30px 0;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(
    270deg,
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0.1)
  );

  @media (max-width: 768px) {
    background: none;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  line-height: 1;
  margin-bottom: 40px;
`;

const ItemTitle = styled.h2`
  font-size: 24px;
`;

const PostText = styled.p`
  white-space: pre-wrap;
  margin-bottom: 20px;
  font-size: 14px;
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: #2c4964;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h2`
  font-size: 16px;
  color: #fff;
  margin: 5px;
`;

const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;

  &::placeholder {
    opacity: 0.5;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  font-family: sans-serif;

  &::placeholder {
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  background-color: #d43076;
  color: white;
  transition: all 0.3s ease-in;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #d43076;
  margin-top: 30px;
  padding: 10px 20px;
  font-weight: 700;
  &:hover {
    background-color: #dd176d;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Hubungi</SectionTitle>
        <Column>
          <Text>
            <Desc>
              <Title>Kongsikan cadangan anda kepada REEZAL MERICAN...</Title>
              <ItemTitle>Alamat.</ItemTitle>
              <PostText>
                Kementerian Perumahan dan Kerajaan Tempatan{"\n"}Aras 18, No.
                51, Persiaran Perdana, {"\n"}Presint 4, 62100 Putrajaya
              </PostText>
              <ItemTitle>Email.</ItemTitle>
              <PostText>admin@reezalmericanofficial.com</PostText>
            </Desc>
          </Text>
          <FormWrapper>
            <Form>
              <Label>Nama.</Label>
              <Input placeholder="Muhammad Amir" type="name"></Input>
              <Label>Email.</Label>
              <Input placeholder="amir@gmail.com" type="email"></Input>
              <Label placeholder="Name">Phone.</Label>
              <Input placeholder="011-213 4456"></Input>
              <Label>Mesej.</Label>
              <TextArea rows="5" placeholder="Mesej"></TextArea>
              <SubmitButton>Hantar Mesej</SubmitButton>
            </Form>
          </FormWrapper>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Contact;
