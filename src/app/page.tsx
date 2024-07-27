"use client"
import Feed from "@/components/Feed/Feed";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import useInfo from "@/hooks/useInfo";

const HomePage = () => {
  const {sidebar} = useInfo();
  const youtubeKey = process.env.NEXT_PUBLIC_YOUTUBE_DATA_API_KEY;
  console.log(youtubeKey)

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed/>
      </div>
    </>
  );
};

export default HomePage;
