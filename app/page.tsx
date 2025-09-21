import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main>
      <div>My Portfolio</div>
      <Link href="/contact">Contact Me</Link><br />
      <ProjectCard />
      

    </main>
  );
}
