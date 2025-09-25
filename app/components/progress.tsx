import { div } from "framer-motion/client";
import React from "react";

const Progress = () => {
  return (
    <div className="bg-amber-100">
      <div className="m-10 p-3 flex gap-6 ">
        <div className="m-10 p-3 flex gap-6 flex-auto bg-blue-100">
          <div className=" border border-2xl border-emerald-800 rounded-2xl p-9 flex-auto">
            <h2 className="text-2xl font-bold text-emerald-400">
              Skill Progress
            </h2>

            <h3 className="text-lg font-semibold mt-4">HTML</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div
                className="bg-red-600 h-2 rounded-full"
                style={{ width: "86%" }}
              ></div>
            </div>
            <h3 className="text-lg font-semibold mt-3">CSS || Tailwind</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div
                className="bg-cyan-800 h-2 rounded-full"
                style={{ width: "79%" }}
              ></div>
            </div>

            <h3 className="text-lg font-semibold mt-3">JavaScript</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div
                className="bg-fuchsia-900 h-2 rounded-full"
                style={{ width: "66%" }}
              ></div>
            </div>

            <h3 className="text-lg font-semibold mt-3">React || Next.js</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div
                className="bg-amber-700 h-2 rounded-full"
                style={{ width: "64%" }}
              ></div>
            </div>

            <h3 className="text-lg font-semibold mt-3">Node JS</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
              <div
                className="bg-emerald-600 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="border border-2xl border-amber-600 rounded-2xl p-9 flex-auto">
          <h2 className="text-2xl font-bold text-emerald-400 m-10 border-amber-600 border-3xl pb-5">
            Quote of Programming
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Progress;
