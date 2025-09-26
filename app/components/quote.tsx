import React from "react";

const Quote = () => {
  return (
    // Use a section with vertical padding for spacing and horizontal padding for mobile
    <section className="bg-gray-50 dark:bg-gray-800/50 py-16 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-6">
          Philosophy
        </h2>
        <blockquote className="relative">
          {/* Decorative quote marks for visual appeal */}
          <p className="absolute -top-8 -left-4 text-8xl text-emerald-400/10 font-serif">“</p>
          <p className="text-xl sm:text-2xl italic text-gray-700 dark:text-gray-300 leading-relaxed">
            "The only way to do great work is to love what you do."
          </p>
          <p className="absolute -bottom-12 -right-4 text-8xl text-emerald-400/10 font-serif">”</p>
        </blockquote>
        <footer className="mt-6 text-lg text-gray-500 dark:text-gray-400">
          - Steve Jobs
        </footer>
      </div>
    </section>
  );
};

export default Quote;