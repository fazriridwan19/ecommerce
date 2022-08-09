import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  margin: 10px 0px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const LinkWrapper = styled.div`
  margin: 5px 0px;
  display: flex;
  justify-content: space-between;
`;
const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Title>SIGN IN</Title>
          <Input placeholder="username" />
          <Input placeholder="password" type="password" />
          <Button>LOGIN</Button>
          <LinkWrapper>
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE NEW ACCOUNT</Link>
          </LinkWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
