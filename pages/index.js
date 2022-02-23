import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "One pixel at a time" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div
        className="font-cairo text-7xl mb-8 font-semibold gradient-text"
        variants={text_reveal}
      >
        {text.content}
      </motion.div>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p variants={text_reveal_fade}>
          I built an intuitive digital interface, offering an unforgettable user experience.
          Never Stop doing your best, just because someone doesn't give you credit and my area of ​​expertise is{" "}
            <a className="text-gray-500">Html</a>,{" "}
            <a className="text-gray-500">Php</a>,{" "}
            <a className="text-gray-500">Css</a>,{" "}
            <a className="text-gray-500">C</a>,{" "}
            <a className="text-gray-500">Javascript</a>,{" "}
            <a className="text-gray-500">Algorithms</a>,and i can use {" "}
            <a className="text-gray-500">NodeJs ✨</a>bit. I'm just a hobby about web programming, 
            I'm more focused on networking
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
