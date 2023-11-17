import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { toast } from "react-toastify";

const Contact = () => {
  const emailToCopy = "mh.hantal@gmail.com";
  const copyToClipboard = () => {
    const textField = document.createElement("textarea");
    textField.innerText = emailToCopy;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    toast.info("Copied!");
  };
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl bg-color"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div>
          <div className="email">
            <p> {emailToCopy}</p>
            <button onClick={copyToClipboard}>
              <FaRegCopy />
            </button>
          </div>
          <div className="contact-icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/muhammet-hantal-6a7b36280"
            >
              <CiLinkedin className="icon" />
            </a>
            <a target="_blank" href="https://github.com/MHntl">
              <FaGithub className="icon" />
            </a>
            <a target="_blank" href="https://www.instagram.com/mhmmt.h/">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
