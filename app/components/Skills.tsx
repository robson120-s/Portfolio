import React from 'react';

// You can create a more specific type if needed
type SkillProps = {
  name: string;
  level: string; // e.g., '80%'
  Icon: React.ElementType; // Allows passing an SVG component
};

// --- Dummy Icons - Replace these with your actual SVG icon components ---
const JavaScriptIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c8 14.7 18.6 25.6 39.1 25.6 19.5 0 30.8-9.9 30.8-24.3 0-16.2-11.7-23.7-32.9-33.4l-14.8-6.6c-27.1-12.3-45.2-26.8-45.2-54.3 0-29.4 22.3-46.7 51.4-46.7 21.3 0 35.8 7.7 46.4 29.4l-33.4 21.3c-5.7-10.8-11.4-15.6-21.3-15.6-10.2 0-16.2 6-16.2 16.2 0 12.3 6.3 18.3 27.1 27.7l14.8 6.6c30.8 13.8 49.3 27.1 49.3 55.5 0 34.3-26.5 51.1-59.4 51.1z"></path></svg>;
const ReactIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192V0C397.4 0 512 114.6 512 256s-114.6 256-256 256v-64c106 0 192-86 192-192zM0 256a192 192 0 1 0 384 0A192 192 0 1 0 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg>;
const NextJSIcon = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c-15.1 15.1-35.4 23.3-56.7 23.3s-41.6-8.2-56.7-23.3l-56.2-56.2c-15.1-15.1-23.3-35.4-23.3-56.7s8.2-41.6 23.3-56.7l56.2-56.2c15.1-15.1 35.4-23.3 56.7-23.3s41.6 8.2 56.7 23.3l56.2 56.2c15.1 15.1 23.3 35.4 23.3 56.7s-8.2 41.6-23.3 56.7l-56.2 56.2z"></path></svg>;
// ... Add other icons similarly

const SkillCard: React.FC<SkillProps> = ({ name, level, Icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{name}</h3>
        <Icon className="text-3xl text-emerald-400" />
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-emerald-400 h-2.5 rounded-full" 
          style={{ width: level }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData: SkillProps[] = [
    { name: 'JavaScript (ES6+)', level: '90%', Icon: JavaScriptIcon },
    { name: 'React', level: '95%', Icon: ReactIcon },
    { name: 'Next.js', level: '85%', Icon: NextJSIcon },
    { name: 'TypeScript', level: '80%', Icon: JavaScriptIcon }, // Replace Icon
    { name: 'Node.js', level: '75%', Icon: JavaScriptIcon }, // Replace Icon
    { name: 'Tailwind CSS', level: '95%', Icon: ReactIcon }, // Replace Icon
    { name: 'GSAP', level: '70%', Icon: ReactIcon }, // Replace Icon
    { name: 'HTML5 & CSS3', level: '95%', Icon: JavaScriptIcon }, // Replace Icon
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">
            My Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A look at the technologies I work with.
          </p>
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;