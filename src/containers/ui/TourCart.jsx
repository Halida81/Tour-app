import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlaceIcon from "@mui/icons-material/Place";
import issykKol from "../../assets/photos/issyk-kol.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TourCard({ id, name, day, price, image }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard id={id}>
      <CardMedia component="img" image={image} height="200" alt={name} />
      <CardContent>
        <div>
          {" "}
          <StyledPlaceIcon /> <span className="locationName">{name}</span>
        </div>
        <div className="aboutTour">
          <Typography className="detail">{day} days</Typography>
          <Typography className="detail">{price} $</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <p style={{ marginLeft: "200px" }}>Booking</p>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  max-width: 345px;
  font-family: "Lato", sans-serif;
  .aboutTour {
    display: "inline";
    justify-content: space-between;
    margin-top: 10px;

    .detail {
      font-family: "Lato", sans-serif;
      font-weight: 700;
    }
  }
  .locationName {
    font-style: normal;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: #fa7436;
  }
`;

const StyledPlaceIcon = styled(PlaceIcon)`
  color: #fa7436;
`;
