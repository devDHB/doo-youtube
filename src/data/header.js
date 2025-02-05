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

export const headerMenus = [
  {
    title: "DEV DOO",
    icon: <CiBaseball />,
    src: "/",
  },
  {
    title: "おすすめ動画",
    icon: <CiMoneyBill />,
    src: "/today",
  },
  {
    title: "Developer",
    icon: <CiCoins1 />,
    src: "/developer",
  },
  {
    title: "Web Study",
    icon: <CiBoxes />,
    src: "/webstudy",
  },
  {
    title: "Website",
    icon: <CiBullhorn />,
    src: "/website",
  },
  {
    title: "Back End",
    icon: <CiCoffeeCup />,
    src: "/backend",
  },
  {
    title: "Front End",
    icon: <CiDumbbell />,
    src: "/frontend",
  },
  {
    title: "Youtube Clone",
    icon: <CiFries />,
    src: "/youtube",
  },
];

export const searchKeyword = [
  {
    title: "dev doo",
    src: "/search/devdoo",
  },
  {
    title: "HTML",
    src: "/search/html",
  },
  {
    title: "CSS",
    src: "/search/css",
  },
  {
    title: "JavaScript",
    src: "/search/javascript",
  },
  {
    title: "React.js",
    src: "/search/react.js",
  },
  {
    title: "Vue.js",
    src: "/search/vue.js",
  },
  {
    title: "Next.js",
    src: "/search/next.js",
  },
  {
    title: "Node.js",
    src: "/search/node.js",
  },
  {
    title: "SQL",
    src: "/search/sql",
  },
  {
    title: "portfolio",
    src: "/search/React Portfolio",
  },
  {
    title: "music",
    src: "/search/bts",
  },
];

export const snsLink = [
  {
    title: "github",
    url: "https://github.com/devDHB",
    icon: <AiFillGithub />,
  },
  {
    title: "youtube",
    url: "https://github.com/devDHB",
    icon: <AiFillYoutube />,
  },
  {
    title: "codepen",
    url: "https://github.com/devDHB",
    icon: <AiOutlineCodepen />,
  },
  {
    title: "instagram",
    url: "https://github.com/devDHB",
    icon: <AiOutlineInstagram />,
  },
];
