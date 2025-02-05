import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webstudy = lazy(() => import('./pages/Webstudy'));
const Website = lazy(() => import('./pages/Website'));
const Backend = lazy(() => import('./pages/Backend'));
const Frontend = lazy(() => import('./pages/Frontend'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Nothing = lazy(() => import('./pages/Nothing'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/webstudy" element={<Webstudy />} />
          <Route path="/website" element={<Website />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelID" element={<Channel />} />
          <Route path="/video/:videoID" element={<Video />} />
          <Route path="/search/:searchID" element={<Search />} />
          <Route path="/*" element={<Nothing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
