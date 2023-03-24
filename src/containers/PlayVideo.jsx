import ReactPlayer from "react-player";
import styled from "styled-components";

export const PlayVideo = ({ id, url }) => {
  return (
    <Container id={id}>
      <ReactPlayer url={url} width="40%" height="40%"  />
    </Container>
  );
};

const Container = styled.div`
  /* display: "flex";
 justify-content: center;
  align-items: center; */
`;
