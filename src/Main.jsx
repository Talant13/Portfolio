import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";

const Main = () => {
  return (
    <div className="box">
      <h1>Hi! I`m Talant!</h1>
      <h2>
        <ReactTypingEffect text={["Frontend Developer"]} />
      </h2>
      <h3>
        Highly motivated and enthusiastic Full Stack Developer with experience
        in designing, developing and maintaining web applications using
        technologies such as JavaScript, React
      </h3>
      <div className="icons">
        <button class="btn">
          <FaGithub />
        </button>
        <button class="btn">
          <SiLinkedin />
        </button>
      </div>
    </div>
  );
};

export default Main;
