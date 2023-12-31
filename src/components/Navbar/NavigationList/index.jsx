import PostOPMenu from "@/components/PostOPMenu";
import Link from "next/link";
import React from "react";

const NavigationList = () => {
  return (
    <nav className="nav-menu">
      <ul className="nav-menu-list">
        <li className="nav-item">
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
        <li className="nav-item">
          <Link href="/about-us">
            <p>About us</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <p>Contact us</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/faq">
            <p>FAQ's</p>
          </Link>
        </li>
        <PostOPMenu />
      </ul>
    </nav>
  );
};

export default NavigationList;
