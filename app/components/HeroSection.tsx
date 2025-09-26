'use client';

import SplitText from "./SplitText";
import Link from "next/link";
import BlurText from "./BlurText";

const HeroSection = () => {
  const handleTitleAnimationComplete = () => {
    console.log('Title animation has completed!');
  };

  const handleParagraphAnimationComplete = () => {
    console.log('Paragraph animation has completed!');
  };

  return (
    // Use max-width for container and padding for spacing on all screen sizes
    <div className="w-full max-w-4xl shadow-lg bg-green-200 shadow-black p-4 sm:p-6 md:p-8 rounded-2xl">
      {/* Responsive heading with adjusted text sizes */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-wide text-center mb-4">
        <SplitText
          text="Welcome to My Portfolio"
          className="text-2xl sm:text-3xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleTitleAnimationComplete}
        />
      </h1>
      
      {/* Responsive subheading */}
      <h3 className="text-center mb-4">
        <span className="text-xl sm:text-2xl font-bold text-gray-400 dark:text-gray-200 font-roboto-mono">
          Programmer || Web Developer
        </span>
      </h3>

      {/* Responsive paragraph with BlurText effect */}
      <BlurText
        text="I'm Robel Shewangizaw, a third-year Computer Science student at Unity University. I don't just write code; I build solutions. My toolkit is powered by a strong foundation in computer science, certified AI knowledge from ALX, and the disciplined efficiency of a Virtual Assistant. I'm passionate about developing web applications that are not only functional but also intelligent. Explore my projects to see how I bring these skills to life."
        className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 text-center md:text-left"
        delay={50}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleParagraphAnimationComplete}
      />

      {/* Centered button on mobile, left-aligned on larger screens */}
      <div className="text-center md:text-left">
        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
        >
          Learn More About Me
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;