import { margin, width } from "@mui/system";
import { VIDEODATA } from "./constants/constants";
import AboutUs from "./containers/AboutUs";
import FollowUs from "./containers/FollowUs";
import { PlayVideo } from "./containers/PlayVideo";
import TourPackages from "./containers/TourPackages";
import VideoCarousel from "./containers/VideoCarousel";
import WhyChooseus from "./containers/WhyChooseus";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <FollowUs />
      <AboutUs />
      <TourPackages />
      <WhyChooseus />
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(1, 1fr)",
          gridColumnGap: "40px",
          gridRowGap: "35px",
        }}
      >
        {VIDEODATA.map((el) => (
          <div key={el.id}>
            <PlayVideo id={el.id} url={el.url} controls={true} />
          </div>
        ))}
      </div> */}
      {/* <div style={{ margin: "0 ,auto", display:"flex", justifyContent:'center'}}>
        {" "}
        <VideoCarousel />
      </div> */}
    </div>
  );
}

export default App;
