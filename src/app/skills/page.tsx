import Skills from "@/components/skills";

const SkillsPage = () => {
  return (
    <section>
      <Skills />
    </section>
  );
};

export default SkillsPage;

export function generateMetadata() {
  return {
    title: "Skills - Tauhidul Islam",
    description: `Discover Tauhidul Islam's extensive skillset in MERN stack development, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. Explore the technical expertise of Tauhidul Islam, a versatile web developer proficient in a wide range of technologies. Enhance your web development projects with Tauhidul Islam's mastery of HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.`,
  };
}
