import React from "react";
import Main from "../components/section/Main";
import Today from "../components/contents/Today";
import Developer from "../components/contents/Developer";
import Website from "../components/contents/Website";
import Backend from "../components/contents/Backend";
import Frontend from "../components/contents/Frontend";
import Youtube from "../components/contents/Youtube";
import WebStudy from "../components/contents/WebStudy";


const Home = () => {
  return (
    <Main title="dev doo youtube" description="ユーチューブのクローン">
      <Today/>
      <Developer/>
      <WebStudy/>
      <Website/>
      <Backend/>
      <Frontend/>
      <Youtube/>
    </Main>
  )
};

export default Home;
