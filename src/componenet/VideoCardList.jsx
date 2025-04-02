import React, { useEffect, useState } from "react";

const VideoCardList = ({ jsonFile }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetch(`/src/assets/${jsonFile}`)
      .then((response) => response.json())
      .then((data) => setVideoData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, [jsonFile]);

  return (
    <div className="p-4">
  <div className="flex space-x-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
    {videoData.map((video, index) => (
      <a
        key={index}
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
      >
        <img src={video.img} alt={video.title} className="w-full h-40 object-cover" />
        <div className="p-2">
          <h3 className="text-lg font-semibold">{video.title}</h3>
        </div>
      </a>
    ))}
  </div>
</div>
  );
};

export default VideoCardList;
