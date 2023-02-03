import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";

interface RouterError extends Error {
  statusText?: string;
}

function ErrorPage() {
  const error = useRouteError() as RouterError;
  console.error(error);

  return (
    <Box>
      <Header>이런! 에러가 발생했군요</Header>
      <Content>
        죄송합니다. 뭔가 문제가 발생한 것 같습니다😢 <br />
        <Link to={"/"}>홈</Link>으로 돌아간 다음 다시 시도해주세요. <br />
        <br />
        문제가 계속된다면 저에게 연락해주세요!
      </Content>
      <ErrorContent>
        {error.message || error.statusText}
      </ErrorContent>
    </Box>
  );
}

export default ErrorPage;

const Box = styled.div`
  margin: 5rem 10rem;
  color: ${({ theme }) => theme.color.black};
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`;

const Content = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
`;

const ErrorContent = styled.p`
  margin-top: 3rem;

  font-size: 2.4rem;
  font-weight: 500;

  color: ${({ theme }) => theme.color.redPoint};
`;
