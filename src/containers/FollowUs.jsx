import React from "react";
import styled from "styled-components";
import mainImage from "../assets/photos/MainImage.svg";
import line from "../assets/photos/Line.svg";
import element1 from "../assets/photos/Element1.svg";
import element2 from "../assets/photos/Element2.svg";
import { ReactComponent as Instagrams } from "../assets/icons/Instagram.svg";
import { ReactComponent as Twitter } from "../assets/icons/Twitter.svg";
import { ReactComponent as Youtube } from "../assets/icons/Youtube.svg";
import Player from "./ui/Player";
import video from "../assets/Bali.mp4";

function FollowUs() {
  return (
    <Container>
      <div className="firstBlock">
        <h1 className="bigText" style={{ backgroundImage: `url(${element1})` }}>
          It’s a Big World Out There, <span className="go">Go Explore</span>
        </h1>
        <p
          className="paragraph"
          style={{ backgroundImage: `url(${element2})` }}
        >
          Time tracking software used by millions. A simple time tracker and
          timesheet app that lets you track work hours across projects......
        </p>
      </div>
      <div className="secondBlock">
        <Player width="1020px" height="620px" url={video} />
        {/* <img src={mainImage} alt="mainImage" className="mainImage" /> */}
        <p className="follow">
          Follow us <img src={line} alt="line" />{" "}
          <a href="#" className="icon">
            <Instagrams />
          </a>{" "}
          <a href="#" className="icon">
            <Twitter />
          </a>{" "}
          <a href="#" className="icon">
            <Youtube />
          </a>
        </p>
      </div>
    </Container>
  );
}

export default FollowUs;

const Container = styled.div`
  margin: 0 auto;
  padding: 25px 0;

  .secondBlock {
    display: flex;
    justify-content: center;
    /* .mainImage {
      width: 70%;
      height: 710px;
    } */

    .follow {
      writing-mode: vertical-lr;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      /* margin-left: 30px; */
      color: #fa7436;
      margin-top: 40px;
      .icon{
        padding: 10px;
      }
    }
  }
  .firstBlock {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .paragraph {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    width: 488px;
    height: 96px;
    margin-top: 190px;
    background-position: bottom;
  }
  .bigText {
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 140%;
    width: 561px;
    height: 303px;
    background-position: right;
  }
  .go {
    color: #fa7436;
  }
`;
