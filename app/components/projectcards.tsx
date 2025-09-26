import React from "react";
import Image from "next/image";

const ProjectCards = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 p-5 text-center">
          My Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          Here are some of my recent works:
        </p>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg shadow-amber-700/20">
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">Project 1</h3>
            <div className="relative w-full h-64">
              <Image
                src="/Anbessa_home.png"
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg shadow-amber-700/20">
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">Project 2</h3>
            <div className="relative w-full h-64">
              <Image
                src="/hr.jpg"
                alt="Project 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg shadow-amber-700/20">
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-white">Project 3</h3>
            <div className="relative w-full h-64">
              <Image
                src="/project3.png"
                alt="Project 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;