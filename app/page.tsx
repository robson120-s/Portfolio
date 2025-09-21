import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main>
      <h1>My Portfolio</h1>
      <Link href="/contact">Contact</Link><br />
      <ProjectCard />
      

    </main>
  );
}
