import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/Logo.svg";

function Header() {
  return (
    <StyledHeader className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="menu">
          <ul>
            {/* <li className="menu-item">
              <img src={logo} alt="logo" />
            </li> */}
            <li className="menu-item">
              <a href="#home">Home</a>
            </li>
            <li className="menu-item">
              <a href="#about">About as</a>
            </li>
            <li className="menu-item">
              <a href="#tourPascages">Tour pascages</a>
            </li>{" "}
            <li className="menu-item">
              <a href="#ourServices">Our services</a>
            </li>{" "}
            <li className="menu-item">
              <a href="#gallery">Gallery</a>
            </li>{" "}
            <li className="menu-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  border-bottom: 1px solid #e5e5e5;
  margin-top: 20px;
  .menu-item {
    margin-right: 100px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .menu ul {
    list-style: none;
    display: flex;
    padding: 10px;
  }
  .menu a {
    text-decoration: none;
    color: black;
  }
  .menu-item {
    font-size: 15px;
    color: #030305;
    text-decoration: none;
  }

  .menu-item a:hover {
    border-bottom: 2px solid #fa7436;
    color: #fa7436;
  }
`;
