import React from "react";

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header id="header" role="banner">
      <h1 className="header__logo">
        <a href="/">
          <em aria-hidden="true"></em>
          <span>
            Doo's
            <br />
            youtube
          </span>
        </a>
      </h1>
      <nav className="header__menu">
        <ul className="menu">
          <li className="active">
            <a href="/">
              <CiBaseball /> Dev Doo
            </a>
          </li>
          <li>
            <a href="/today">
              <CiMoneyBill /> おすすめ動画
            </a>
          </li>
          <li>
            <a href="/developer">
              <CiCoins1 /> Developer
            </a>
          </li>
          <li>
            <a href="/webstudy">
              <CiBoxes /> Web Study
            </a>
          </li>
          <li>
            <a href="/website">
              <CiBullhorn /> Website
            </a>
          </li>
          <li>
            <a href="/gsap">
              <CiCoffeeCup /> GSAP Parallax
            </a>
          </li>
          <li>
            <a href="/front">
              <CiDumbbell /> Front-End
            </a>
          </li>
          <li>
            <a href="/youtube">
              <CiFries /> Youtube Clone
            </a>
          </li>
        </ul>
        <ul className="keyword">
          <li>
            <a href="/search/webstoryboy">Dev Doo</a>
          </li>
          <li>
            <a href="/search/html">HTML</a>
          </li>
          <li>
            <a href="/search/css">CSS</a>
          </li>
          <li>
            <a href="/search/javascript">JavaScript</a>
          </li>
          <li>
            <a href="/search/react.js">React.js</a>
          </li>
          <li>
            <a href="/search/vue.js">Vue.js</a>
          </li>
          <li>
            <a href="/search/next.js">Next.js</a>
          </li>
          <li>
            <a href="/search/node.js">Node.js</a>
          </li>
          <li>
            <a href="/search/sql">SQL</a>
          </li>
          <li>
            <a href="/search/React Portfolio">portfolio</a>
          </li>
          <li>
            <a href="/search/NewJeans">music</a>
          </li>
        </ul>
      </nav>
      <div className="header__sns">
        <ul>
          <li>
            <a href="https://github.com/devDHB" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://github.com/devDHB" rel="noopener noreferrer">
              <AiFillYoutube />
            </a>
          </li>
          <li>
            <a href="https://github.com/devDHB" rel="noopener noreferrer">
              <AiOutlineCodepen />
            </a>
          </li>
          <li>
            <a href="https://github.com/devDHB" rel="noopener noreferrer">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
