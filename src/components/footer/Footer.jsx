import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="footer-button">
        <GrHomeRounded />
      </Link>
      <Link to="/search" className="footer-button">
        <IoSearch />
      </Link>
      <Link to="/pokemon" className="footer-button">
        <MdOutlineCatchingPokemon />
      </Link>
    </div>
  );
};

export default Footer;
