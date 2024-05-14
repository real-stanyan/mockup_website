import React from "react";
import Image from "next/image";

const Home_intro = () => {
  return (
    <div className="video-container relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/home_bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        src="/images/home_bg_cover_pc.png"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 z-10 w-full h-full object-cover hidden md:block"
      />
      <Image
        src="/images/home_bg_cover_pe.png"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 z-10 w-full h-full object-cover block md:hidden"
      />
    </div>
  );
};

export default Home_intro;
