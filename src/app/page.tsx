import Channel from "@/components/Channel";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Projects />
      <Experience />
      <Channel />
      <hr className="md:mt-8 mt-5 mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <Contact />
    </div>
  );
}
