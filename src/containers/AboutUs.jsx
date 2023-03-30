import React from "react";
import styled from "styled-components";
import bgImage from "../assets/photos/Image.svg";
import element from "../assets/photos/Element3.svg";
import { ReactComponent as Element3 } from "../assets/photos/Element3.svg";

function AboutUs() {
  return (
    <Container>
      <div className="image">
        <img src={bgImage} alt="bgImage" />
      </div>
      <div className="about">
        <p className="theme">ABOUT US</p>
        <h2 className="title">
          The Best And Most trusted <span className="service">service</span>
        </h2>
        <p className="text">
          We are the largest holiday service provider in the world with partners
          and places spread all over the world by prioriti-zing service and
          customer satisfaction.
        </p>

        <button className="btn">Learn more
        </button>
        <div className="fact">
          <p className="facts">
            200+ <span className="child">Customer & partners</span>
          </p>{" "}
          <p className="facts">
            500+ <span className="child">Place in the world</span>
          </p>{" "}
          <p className="facts">
            1k+ <span className="child">Success Journey</span>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: center;

  .image {
    width: 580px;
    height: 633px;
  }
  .about {
    margin-left: 20px;

    button {
      /* margin: 70px 0; */
      width: 161px;
      height: 56px;
      border: none;
      color: white;
      background: #fa7436;
      border-radius: 8px;
      cursor: pointer;
    }
    .fact {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* margin-top: 200px; */
    }
    .facts {
      width: 104px;
      height: 100px;
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 100%;
      color: rgba(250, 116, 54, 0.5);

      .child {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        text-align: center;
        text-transform: capitalize;
        color: rgba(34, 34, 34, 0.5);
      }
    }
    .theme {
      color: #fa7436;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
    }

    .title {
      width: 522px;
      height: 146px;

      font-style: normal;
      font-weight: 400;
      font-size: 56px;
      line-height: 130%;

      .service {
        color: #fa7436;
      }
    }

    .text {
      width: 532px;
      height: 96px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 180%;
      color: #666666;
    }
  }
`;
