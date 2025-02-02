import About from "@/components/about";
import Blogs from "@/components/blogs";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Skills from "@/components/skills";

const Home = () => {
  return (
    <>
      <MaxWidthWrapper className="">
        <Hero />
        <About />
        <hr />
        <Skills />
        <hr />
        <Blogs />
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
