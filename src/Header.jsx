import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={scrolled ? "header scrolled" : "header"}>
      <div className="navbar">
        <ul>
          <li>Main</li>
          <li>Projects</li>
          <li>Skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
