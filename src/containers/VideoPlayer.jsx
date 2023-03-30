import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import video from "../assets/Bali.mp4";
import video2 from "../assets/Garden.mp4";
import video3 from "../assets/Japan.mp4";
import "./VideoPlayerStyle.css";

const images = [video, video2, video3, video, video2];

function VideoPlayer() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight style={{ width: "40px", height: "40px" }} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft style={{ width: "40px", height: "40px" }} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <video width="100%" height="100%" controls>
                              
              <source src={img} type="video/mp4" />
                          
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default VideoPlayer;
