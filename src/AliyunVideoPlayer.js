import React, { useEffect, useRef, useState } from "react";
import "./AliyunVideoPlayer.css";
import Watermark from "./Watermark";

const AliyunVideoPlayer = ({
  videoSources,
  width = "100%",
  height = "500px",
  autoplay = false,
}) => {
  const playerRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    let player;

    if (typeof window.Aliplayer !== "undefined") {
      player = new window.Aliplayer({
        id: playerRef.current.id,
        source: videoSources[currentVideoIndex],
        width,
        height,
        autoplay,
        // 更多配置选项可以在这里添加
      });
    } else {
      console.error("Aliplayer is not defined. Please make sure the aliplayer-min.js script is loaded.");
    }

    return () => {
      if (player) {
        player.dispose();
        player = null;
      }
    };
  }, [videoSources, currentVideoIndex, width, height, autoplay]);

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const nextVideo = () => {
    if (currentVideoIndex < videoSources.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  return (
    <div className="aliyun-video-player-container">
      <div id={`aliyun-video-player-${Date.now()}`} ref={playerRef}></div>
      <Watermark text="Dynamically Scrolling Watermark" />
      <button onClick={prevVideo} disabled={currentVideoIndex === 0}>上一节</button>
      <button onClick={nextVideo} disabled={currentVideoIndex === videoSources.length - 1}>下一节</button>
    </div>
  );
};

export default AliyunVideoPlayer;
