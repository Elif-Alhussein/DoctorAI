import React from "react";

const NavLinks = ({ links }) => {
  return (
    <>
      {links.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="py-2 text-cyan-600 hover:text-cyan-800 transition duration-300 ease-in-out transform hover:scale-105 text-2xl"
          target={item === "Portfolio" ? "_self" : "_blank"} 
          rel="noopener noreferrer"
        >
          {item}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
