import React from "react";
import VideoCardList from "../componenet/VideoCardList";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 sm:px-6 lg:px-12 py-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Easy - Learning
      </h1>

      <div className="space-y-8">
        {[
          { title: "Operating System", json: "os.json" },
          { title: "DBMS", json: "dbms.json" },
          { title: "Java", json: "java.json" },
          { title: "Microprocessors and Interfacing", json: "mp.json" },
          { title: "Software Engineering", json: "se.json" },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-left">
              {course.title}
            </h2>
            <VideoCardList jsonFile={course.json} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
