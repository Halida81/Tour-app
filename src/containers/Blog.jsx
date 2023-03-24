import React from "react";
import styled from "styled-components";
import { BLOG } from "../constants/constants";
import BlogCart from "./ui/BlogCart";

function Blog() {
  return (
    <Container>
      <h1>Our Blog</h1>
      <CardContainer>
        {BLOG.map((el) => (
          <BlogCart
            key={el.id}
            id={el.id}
            image={el.image}
            subtitle={el.subTitle}
            title={el.title}
            date={el.date}
            bg={el.bg}
          />
        ))}
      </CardContainer>
    </Container>
  );
}

export default Blog;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  h1 {
    display: flex;
    justify-content: flex-start;
    padding-bottom: 15px;
  }
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 5px;
`;
