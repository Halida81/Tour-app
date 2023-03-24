import AboutUs from "./containers/AboutUs";
import FollowUs from "./containers/FollowUs";
import TourPackages from "./containers/TourPackages";
import WhyChooseus from "./containers/WhyChooseus";
import Header from "./layout/Header";
import Blog from "./containers/Blog";
import OurPartners from "./containers/OurPartners";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FollowUs />
      <AboutUs />
      <TourPackages />
      <WhyChooseus />
      {/* <div style={{ margin: "0 ,auto", display:"flex", justifyContent:'center'}}>
       {" "}
       <VideoCarousel />
     </div> */}
      <Blog />

      <OurPartners />
      <Footer />

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
    </div>
  );
}

export default App;
