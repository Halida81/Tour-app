import { VIDEODATA } from "./constants/constants";
import Player from "./containers/ui/Player";
import VideoPlayer from "./containers/VideoPlayer";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import video from "./assets/Bali.mp4";
import FollowUs from "./containers/FollowUs";
import AboutUs from "./containers/AboutUs";
import TourTab from "./containers/ui/TourTab";
import WhyChooseus from "./containers/WhyChooseus";
import Blog from "./containers/Blog";
import OurPartners from "./containers/OurPartners";

function App() {
  return (
    <div>
      <Header />
      <FollowUs />
      <AboutUs />
      <TourTab />
      <WhyChooseus />
      <Player url={video} width="1020px" height="620px" />
      <VideoPlayer />
      <Blog />
      <OurPartners />
      <Footer />
    </div>
  );
}

export default App;
