import React from "react";
import styled from "styled-components";
import { PARTNERSLOGOS } from "../constants/constants";

function OurPartners({ id, logo }) {
  return (
    <Container>
      <h1>Our Partners</h1>
      <Content className="content">
        {PARTNERSLOGOS.map((el) => (
          <div key={el?.id}>
            <Span>
              <img src={el?.logo} alt="logo" />
              <span>{el?.name}</span>
            </Span>
          </div>
        ))}
      </Content>
    </Container>
  );
}

export default OurPartners;

const Container = styled.div`
  @media screen and (max-width: 990px) {
    h1 {
      display: flex;
      justify-content: center;
    }
  }
  h1 {
    display: flex;
    justify-content: center;
    font-family: "EB Garamond", serif;
    color: black;
  }
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 990px) {
    margin-right: 20px;
  }
`;
const Span = styled.span`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.2);
  }
  span {
    padding: 3px;
  }
`;
