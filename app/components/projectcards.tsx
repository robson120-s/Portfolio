import React from "react";
import Image from "next/image";

const ProjectCards = () => {
  return (
    <div>
      <div className="text-5xl font-bold text-blue-400 p-5 text-center">
        My Projects
      </div>
      <p className="text-center">Here are some of my recent works:</p>
      <div className="">
        <div className="border border-gray-300 rounded-lg p-4 m-2 flex gap-16 justify-center bg-gray-200">
            
          <div className="pl-9 shadow-2xl shadow-amber-700 rounded-4xl">
            Project 1
            <Image
              src="/project1.png"
              alt="Project 1"
              width={400}
              height={300}
              className="object-cover shadow-lg rounded-3xl mt-4 hover:scale-105 transition-transform duration-300"
            />
          </div>

        <div className="pl-9 shadow-2xl shadow-amber-700 rounded-4xl">
            Project 2
            <Image
              src="/project2.png"
              alt="Project 2"
              width={400}
              height={300}
              className="object-cover shadow-lg rounded-3xl mt-4 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="pl-9 shadow-2xl shadow-amber-700 rounded-4xl">
            Project 3
            <Image
              src="/project3.png"
              alt="Project 3"
              width={400}
              height={300}
              className="object-cover shadow-lg rounded-3xl mt-4 hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 pt-3">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
