"use client";
import React, { useRef, useState } from "react";
// import { Paragraph } from "@/components/Typography";
import Link from "next/link";
import { ExpandMoreIcon } from "../SVGs";
// import { useDetectOutsideClick } from "@/hooks/useDetectOutsideClick";

const PostOPMenu = () => {
  const dropdownRef = useRef("");
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="containedr">
      <div className="menu-container">
        <p onClick={onClick} className="menu-trigger">
          Post OP instructions
          <ExpandMoreIcon />
        </p>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li onClick={onClick}>
              <Link href="/post-op-instructions/teeth-whitening">
                <p>Teeth Whitening</p>
              </Link>
            </li>

            <li onClick={onClick}>
              <Link href="/post-op-instructions/tooth-colored-fillings">
                <p>Tooth Colored Fillings</p>
              </Link>
            </li>

            <li onClick={onClick}>
              <Link href="/post-op-instructions/root-canal">
                <p>Root Canal Therapy</p>
              </Link>
            </li>

            <li onClick={onClick}>
              <Link href="/post-op-instructions/tooth-extraction">
                <p>Extraction</p>
              </Link>
            </li>
            <li onClick={onClick}>
              <Link href="/post-op-instructions/crown-and-bridge">
                <p>Crown & Bridge</p>
              </Link>
            </li>

            <li onClick={onClick}>
              <Link href="/post-op-instructions/denture">
                <p>Denture</p>
              </Link>
            </li>

            <li onClick={onClick}>
              <Link href="/post-op-instructions/scaling-and-root-planing">
                <p>Scaling & Root Planing</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PostOPMenu;
