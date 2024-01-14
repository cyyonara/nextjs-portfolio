import About from "@/components/about";
import MySkills from "@/components/mySkills";

export default function Main() {
  return (
    <main className="text-white flex flex-col px-8">
      <About />
      <MySkills />
    </main>
  );
}
