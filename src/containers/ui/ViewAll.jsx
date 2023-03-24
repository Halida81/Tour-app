import React, { useState } from "react";
import styled from "styled-components";
import TourCard from "./TourCart";

function ViewAll({ data }) {
  const [showMore, setShowMore] = useState(false);
  const length = data.length;

  const isShowMoreCartHandler = () => {
    setShowMore(!showMore);
  };

const whichIsTitle = !showMore ? 'View All' : "Hide"

  return (
    <Container>
      <CartContainer>
        {showMore
          ? data.map((el) => (
              <TourCard
                key={el?.id}
                id={el?.id}
                name={el?.name}
                day={el?.day}
                price={el?.price}
                image={el?.image}
              />
            ))
          : data
              .slice(0, 6)
              .map((el) => (
                <TourCard
                  key={el?.id}
                  id={el?.id}
                  name={el?.name}
                  day={el?.day}
                  price={el?.price}
                  image={el?.image}
                />
              ))}
      </CartContainer>
      {length > 6 && <div className="viewAll">
        <button className="showMore" onClick={isShowMoreCartHandler}>{whichIsTitle}</button>
      </div>}
    </Container>
  );
}

export default ViewAll;
const CartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 35px;
`;

const Container = styled.div`

.viewAll{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
  .showMore {
    width: 158px;
    height: 56px;
    border: 1px solid #fa7436;
    border-radius: 8px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fa7436;
  }
`;
