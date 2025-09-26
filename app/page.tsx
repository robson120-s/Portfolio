import Image from "next/image";
import Header from "./components/header";
import Skills from "./components/Skills"; // Changed from Progress
import ProjectCards from "./components/projectcards";
import HeroSection from "./components/HeroSection";
import Quote from "./components/quote";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      
      <main>
        <section className="bg-amber-200 dark:bg-amber-900/20 w-full">
          <div className="
            container mx-auto px-4 py-8 
            flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12
          ">
            
            <div className="
              relative w-full max-w-xs sm:max-w-sm md:w-1/3 
              aspect-[3/4] flex-shrink-0
            ">
              <Image
                src="/man.jpg"
                alt="A portrait of Robel Shewangizaw"
                fill
                className="object-cover shadow-lg rounded-3xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="w-full md:w-2/3">
              <HeroSection />
            </div>
            
          </div>
        </section>

        {/* --- New Responsive Components --- */}
        <Skills />
        <ProjectCards />
        <Quote />
      </main>
    </div>
  );
}