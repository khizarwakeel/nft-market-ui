import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Herosection from "./components/herosection/herosection.jsx";
import LiveAuction from "./components/liveauctions/liveauction.jsx";
import CreativeArtist from "./components/creativeartist/creativeartist.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      {/* <LiveAuction/> */}
      <CreativeArtist />
    </div>
  );
};

export default App;