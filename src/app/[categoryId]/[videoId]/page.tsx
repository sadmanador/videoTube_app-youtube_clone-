"use client"
import "./Video.css";
import Navbar from "@/components/Navbar/Navbar";
import PlayVideo from "@/components/PlayVideo/PlayVideo";
import Recommended from "@/components/Recommended/Recommended";
import useInfo from "@/hooks/useInfo";

const VideoPage = () => {
  const {lightMode} = useInfo();

  return (
    <>
      <Navbar />
      <div className={`play-container ${lightMode?"":"dark-mode"}`}>
        <PlayVideo />
        <Recommended />
      </div>
    </>
  );
};

export default VideoPage;
