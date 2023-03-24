import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BlogCart({ id, date, image, subtitle, title, bg }) {
  return (
    <StyledCard sx={{ background: bg }} id={id}>
      <CardContent>
        <p className="date">{date}</p>
        <StyledCardMedia component="img" image={image} alt="travel" />
      </CardContent>
      <CardContent sx={{ background: "white" }}>
        <Typography>{subtitle}</Typography>
        <Typography>{title}</Typography>
      </CardContent>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
margin-bottom: 50px;
  max-width: 345px;
  -webkit-box-shadow: 1px 14px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 1px 14px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 1px 14px 8px 0px rgba(34, 60, 80, 0.2);
  .date {
    color: white;
    margin-left: 15px;
    padding: 7px;
  }
`;
const StyledCardMedia = styled(CardMedia)`
  height: 194px;
  margin-bottom: -16px;
  margin-left: 16px;
`;
