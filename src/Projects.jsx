import React from "react";
import img1 from "./assets/movieList.png";
import img2 from "./assets/tictactoe.png";
import { VscLiveShare } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="box">
      <h2>Projects</h2>
      <div className="projects">
        <div class="book">
          <span>
            <VscLiveShare />
            <a href="https://movielocalstore.netlify.app">Demo</a>
          </span>
          <span>
            <FaGithub />
            <a href="https://github.com/Talant13/MovieApp">Github</a>
          </span>
          <div class="cover">
            <img src={img1} alt="project" />
          </div>
        </div>
        <div class="book">
          <span>
            <VscLiveShare />
            <a href="https://talant-tic-tac-toe.netlify.app">Demo</a>
          </span>
          <span>
            <FaGithub />
            <a href="https://github.com/Talant13/Tic-Tac-Toe">Github</a>
          </span>
          <div class="cover">
            <img src={img2} alt="project" />
          </div>
        </div>
        <div class="book">
          <span>
            <VscLiveShare />
            <a href="https://movielocalstore.netlify.app">Demo</a>
          </span>
          <span>
            <FaGithub />
            <a href="https://github.com/Talant13/MovieApp">Github</a>
          </span>
          <div class="cover">
            <img src={img1} alt="project" />
          </div>
        </div>
        <div class="book">
          <span>
            <VscLiveShare />
            <a href="https://talant-tic-tac-toe.netlify.app">Demo</a>
          </span>
          <span>
            <FaGithub />
            <a href="https://github.com/Talant13/Tic-Tac-Toe">Github</a>
          </span>
          <div class="cover">
            <img src={img2} alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
