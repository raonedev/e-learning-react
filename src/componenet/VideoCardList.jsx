import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCardList = ({ jsonFile }) => {
    const [videoData, setVideoData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/src/assets/${jsonFile}`)
            .then((response) => response.json())
            .then((data) => setVideoData(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, [jsonFile]);

    const handleVideoClick = (url) => {
        try {
            let videoId = "";

            if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1];
            } else if (url.includes("youtube.com/watch?v=")) {
                videoId = url.split("v=")[1].split("&")[0];
            } else {
                console.error("Invalid YouTube URL format:", url);
                return;
            }

            navigate(`/watch/${videoId}`);
        } catch (error) {
            console.error("Error parsing YouTube URL:", error);
        }
    };

    return (
        <div className="p-4">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {videoData.map((video, index) => (
                    <button
                        key={index}
                        onClick={() => handleVideoClick(video.url)}
                        className="min-w-[180px] sm:min-w-[280px] min-h-[150px] bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                         {/* Fixed Image Size for Consistency */}
                         <div className="p-[2px]">
                            <img 
                                src={video.img} 
                                alt={video.title} 
                                className="w-full h-[112px] sm:h-[140px] md:h-[160px] object-cover aspect-video rounded-lg"
                            />
                        </div>
                        {/* Fixed Text Height */}
                        <div className="p-2 text-white flex-grow flex items-center">
                            <h3 className="text-sm sm:text-base font-semibold line-clamp-2 leading-tight">
                                {video.title}
                            </h3>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default VideoCardList;
