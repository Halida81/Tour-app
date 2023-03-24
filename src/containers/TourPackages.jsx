import React from "react";
import styled from "styled-components";
import TourTab from "./ui/TourTab";

function TourPackages() {
  return (
    <Container>
      <h1>
        The <span>best place</span> for vacation
      </h1>
      <TourTab />
    </Container>
  );
}

export default TourPackages;

const Container = styled.div`
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 100%;
    color: #222222;

    span {
      color: #fa7436;
    }
  }

`;
