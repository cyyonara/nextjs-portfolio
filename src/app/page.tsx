import About from "@/components/about";
import MySkills from "@/components/mySkills";
import Projects from "@/components/projectsList";

export default function Main() {
  return (
    <main className="text-white flex flex-col px-8 mb-[150px]">
      <About />
      <MySkills />
      <Projects />
    </main>
  );
}
