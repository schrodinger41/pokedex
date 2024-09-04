import React from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "./footer.css";

const Footer = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="footer">
      <Link onClick={handleLogout} className="footer-button">
        <RiLogoutBoxLine />
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
