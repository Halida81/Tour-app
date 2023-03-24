import React from "react";
import styled from "styled-components";
import icon from "../assets/icons/firstIcon.svg";
import { WHYCHOOSEUSDATA } from "../constants/constants";

function WhyChooseus() {
  return (
    <Container>
      <div className="choose">
        <h3>Why Choose Us</h3>
        <p>
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
      </div>
      {WHYCHOOSEUSDATA.map((el) => (
        <div className="data" key={el.id}>
          <img src={el.icon} alt="icon" />
          <h4>{el.title}</h4>
          <p>{el.text}</p>
        </div>
      ))}
    </Container>
  );
}

export default WhyChooseus;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 50px 0;
  .choose {
    width: 320px;
    height: 160px;
  }
  .data {
    width: 274px;
    height: 172px;
  }
  h3 {
  }
`;
