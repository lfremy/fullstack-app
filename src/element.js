import styled from "styled-components";

const H1 = styled.h1`
    font-size: 40px;   
`;

const Container = styled.main`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;
`

const Header = styled.header`
background-color: #F76C6C;
  color: #fff;
`

const Votes = styled.span`
    background-color: ${({ votes }) =>
        votes > 1
            ? "rgba(0, 100, 0, 0.3)"
            : "rgba(0, 0, 0, 0.3)"};
  color: #fff;
`


export { H1, Container, Header, Votes }


