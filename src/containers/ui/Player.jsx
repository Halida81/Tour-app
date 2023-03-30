import React, { useState, useRef } from "react";

const Player = ({ url, height, width }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
                  
      <video ref={videoRef} width={width} height={height} controls>
                        
        <source src={url} type="video/mp4" />
                    
      </video>
                  
      {/* <button onClick={togglePlay}>
                        {isPlaying ? "Pause" : "Play"}
                    
      </button> */}
              
    </div>
  );
};

export default Player;
