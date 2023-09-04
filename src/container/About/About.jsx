import "./About.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <div className="flex justify-center text-center text-4xl mt-10 font-semibold">
        <p>
          I Know that <span className="text-[#313bac]">Good Development</span>{" "}
          <br />
          means <span className="text-[#313bac]">Good Business</span>
        </p>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item text-center"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2
              className="bold-text text-lg font-semibold"
              style={{ marginTop: 20 }}
            >
              {about.title}
            </h2>
            <p className="p-text text-gray-500" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
