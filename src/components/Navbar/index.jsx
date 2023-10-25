"use client";
import React, { useState } from "react";
import NavigationList from "@/components/Navbar/NavigationList";
import Hamburger from "hamburger-react";
import Button from "@/components/Button";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => setOpen(!open);
  return (
    <div className="topbar">
      <div className="top-left">
        <div className="top-logo-wrapper">
          <img
            src="https://i.ibb.co/xJXGtVS/output-onlinepngtools.png"
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
          <Link href="/insurance">
            <p>Insurance</p>
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
