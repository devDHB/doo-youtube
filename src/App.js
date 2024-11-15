import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import Developer from "./pages/Developer";
import Webstudy from "./pages/Webstudy";
import Website from "./pages/Website";
import Gsap from "./pages/Gsap";
import Frontend from "./pages/Frontend";
import Youtube from "./pages/Youtube";
import Channel from "./pages/Channel";
import Video from "./pages/Video";
import Search from "./pages/Search";
import Nothing from "./pages/Nothing";
import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Footer from "./components/section/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/webd" element={<Webstudy />} />
          <Route path="/website" element={<Website />} />
          <Route path="/gsap" element={<Gsap />} />
          <Route path="/port" element={<Frontend />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelID" element={<Channel />} />
          <Route path="/video/:videoID" element={<Video />} />
          <Route path="/search/:searchID" element={<Search />} />
          <Route path="/*" element={<Nothing />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
