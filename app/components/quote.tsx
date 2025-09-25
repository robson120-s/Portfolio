import React from "react";

const Quote = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-400 m-3 border-amber-600 border-3xl text-center">
        Quote of Programming
      </h2>
      <blockquote className="border-l-4 border-emerald-400 pl-4 italic justify-center text-lg mt-14">
        <p className="text-center">"The only way to do great work is to love what you do." - Steve Jobs</p>
      </blockquote>
    </div>
  );
};

export default Quote;
