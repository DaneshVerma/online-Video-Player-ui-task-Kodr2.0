import React from "react";
import videos from "./data/videos.json";
import VideoCard from "./VideoCard";
import SearchBar from "./SearchBar";
import Header from "./components/Header";

const Home = () => (
  <div>
   <Header />
    <main className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </main>
  </div>
);

export default Home;
