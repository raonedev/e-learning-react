import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import ChatBot from "../componenet/ChatBot";

const VideoPlayerPage = () => {
  const { videoId } = useParams();
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white">
      {/* Video Section (3/4) */}
      <div className="w-full md:w-3/4 h-[60vh] md:h-full flex justify-center items-start bg-black px-10 py-20">
        <ReactPlayer url={videoUrl} playing={true} controls={true} width="100%" height="100%" />
      </div>

      {/* Chatbot Section (1/4) */}
      <div className="w-full md:w-1/4 h-[40vh] md:h-full bg-gray-800 p-4 border-l border-gray-700">
        <ChatBot />
      </div>
    </div>
  );
};

export default VideoPlayerPage;
