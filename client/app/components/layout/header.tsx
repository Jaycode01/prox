"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./header.css";

const Header = () => {
  const [menu, setmenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="socials">
          <Link href="">
            <Image src="/icons/x.svg" alt="twitterX" width={25} height={25} />
          </Link>
          <Link href="">
            {" "}
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={35}
              height={35}
            />
          </Link>
          <Link href="">
            {" "}
            <Image
              src="/icons/reddit.svg"
              alt="reddit"
              width={35}
              height={35}
            />
          </Link>
        </div>

        <Link href="/">
          <Image
            src="/images/prox.png"
            alt="prox"
            width={200}
            height={80}
            className="prox"
          />
        </Link>

        <button type="button" className="primary_cta">
          <Image
            src="/icons/bolt.svg"
            width={20}
            height={20}
            alt="bolt"
            className="bolt"
          />
          <span>Join Waitlist</span>
        </button>

        <button
          type="button"
          className={`menu ${menu ? "open" : ""}`}
          onClick={() => setmenu(!menu)}
        >
          <Image
            src="/icons/menu.svg"
            alt="menu"
            height={40}
            width={40}
            className="menu-icon"
          />
          <Image
            src="/icons/close.svg"
            alt="close"
            height={40}
            width={40}
            className="close-icon"
          />
        </button>
      </header>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${menu ? "open" : ""}`}>
        <Link href="" className="mobile-nav-item">
          <Image
            src="/icons/x.svg"
            alt="x"
            className="twitter"
            width={20}
            height={20}
            unoptimized={true}
          />
          <span>TwitterX</span>
        </Link>
        <Link href="" className="mobile-nav-item">
          <Image
            src="/icons/instagram.svg"
            alt="instagram"
            className="instagram"
            width={30}
            height={30}
            unoptimized={true}
          />
          <span>Instagram</span>
        </Link>
        <Link href="" className="mobile-nav-item">
          <Image
            src="/icons/reddit.svg"
            alt="reddit"
            className="reddit"
            width={30}
            height={30}
            unoptimized={true}
          />
          <span>Reddit</span>
        </Link>

        <button type="button" className="mobile-cta">
          <Image
            src="/icons/bolt.svg"
            alt="bolt"
            className="bolt"
            width={20}
            height={20}
          />
          <span>Join Waitlist</span>
        </button>
      </nav>
    </>
  );
};

export default Header;
