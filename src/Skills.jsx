import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaAtom } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="box">
      <h2>Skills</h2>
      <div className="cards">
        <div className="card red">
          <FaHtml5 />
        </div>
        <div className="card blue">
          <IoLogoCss3 />
        </div>
        <div className="card yellow">
          <SiJavascript />
        </div>
        <div className="card blueReact">
          <FaAtom />
        </div>
        <div className="card redSql">
          <TbSql />
        </div>
        <div className="card purple">
          <FaBootstrap />
        </div>
        <div className="card mui">
          <SiMui />
        </div>
        <div className="card redux">
          <TbBrandRedux />
        </div>
      </div>
    </div>
  );
};

export default Skills;
