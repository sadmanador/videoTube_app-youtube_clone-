import "./Video.css";
import Navbar from "@/components/Navbar/Navbar";
import PlayVideo from "@/components/PlayVideo/PlayVideo";
import Recommended from "@/components/Recommended/Recommended";

const VideoPage = () => {
  return (
    <>
      <Navbar />
      <div className="play-container">
        <PlayVideo />
        <Recommended />
      </div>
    </>
  );
};

export default VideoPage;
