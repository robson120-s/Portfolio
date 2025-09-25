import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Progress from "./components/progress";
import ProjectCards from "./components/projectcards";


export default function Home() {
  return (
    // from-rose-500 via-zinc-500 to-red-500
    <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className=" inline-flex py-2 pb-3 bg-amber-200 ">
        <div className="relative w-78 h-90 mx-20 mt-4 ">
          <Image
            src="/man.jpg"
            alt="Description"
            fill
            className="object-cover shadow-lg rounded-3xl"
          />
        </div>
        <div className="shadow-lg bg-green-200 shadow-black p-3 w-220 mr-47 rounded-2xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-wide mx-6 my-4 text-center">
            Welcome to My Portfolio
          </h1>
          <h3>
            <span className="text-2xl font-bold text-gray-400 dark:text-gray-200 mx-6 mb-4 font-roboto-mono">
              Programmer || Web Developer{" "}
            </span>
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mx-6 mb-6 ">
            I'm Robel Shewangizaw, a third-year Computer Science student at
            Unity University. I don't just write code; I build solutions. My
            toolkit is powered by a strong foundation in computer science,
            certified AI knowledge from ALX, and the disciplined efficiency of a
            Virtual Assistant. I'm passionate about developing web applications
            that are not only functional but also intelligent. Explore my
            projects to see how I bring these skills to life.
          </p>
          <Link
            href="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-200 mx-6 mb-6"
          >
            Learn More About Me
          </Link>
        </div>
      </div>
      <Progress />
      <br />
      <ProjectCards />
    </div>
  );
}

// // app/page.tsx

// import Image from "next/image";
// import Link from "next/link";
// import Header from "./components/header";
// // import ProjectCard from "./components/ProjectCard";

// export default function Home() {
//   return (
//     // Change this from <main> to <div> and add padding-top
//     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 pt-24">
//       <Header />
//       <div className="relative w-48 h-60 mx-auto"> {/* Added mx-auto to center it */}
//         <Image
//           src="/man.jpg"
//           alt="Description"
//           fill
//           className="object-cover shadow-lg rounded-3xl"
//         />
//       </div>

//       <br />
//       {/* <ProjectCard /> */}
//     </div>
//   );
// }
