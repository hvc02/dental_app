"use client";
import React, { useState } from "react";
import NavigationList from "@/components/Navbar/NavigationList";
import Hamburger from "hamburger-react";
import Button from "@/components/Button";
import Link from "next/link";
import { LogoIcon } from "@/components/SVGs";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => setOpen(!open);
  return (
    <div className="topbar">
      <div className="top-left">
        <div className="top-logo-wrapper">
          {/* <LogoIcon /> */}
          <img
            src="https://res.cloudinary.com/dfnfszqky/image/upload/v1699719986/150x60_SVG_ddgeq5.svg"
            // src="https://res.cloudinary.com/dfnfszqky/image/upload/v1699690474/Phoenix_Dental_Logo_Final-01_ivqrcr.png"
            alt="output-onlinepngtools"
          />
        </div>
        {isOpen && (
          <div className={`nav-menu-wrapper ${isOpen ? "active" : ""}`}>
            <NavigationList />
          </div>
        )}
      </div>
      <ul className="middle-list">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/new-patient">
            <p>New Patient</p>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <p>About us</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p>Contact us</p>
          </Link>
        </li>
        <li>
          <Link href="/faq">
            <p>FAQ's</p>
          </Link>
        </li>
      </ul>
      <div className="top-right">
        <p className="phone-number">508-202-9067</p>
        <div className="hamburger-icon-wrapper">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="topbar-cta-wrapper">
          <Button text="Schedule Now" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
