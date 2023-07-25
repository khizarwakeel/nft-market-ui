import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Herosection from "./components/herosection/herosection.jsx";
import LiveAuction from "./components/liveauctions/liveauction.jsx";
import CreativeArtist from "./components/creativeartist/creativeartist.jsx";
import MostPopular from "./components/mostpopular/mostpopular.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      {/* <LiveAuction/> */}
      <CreativeArtist />
      <MostPopular />
    </div>
  );
};

export default App;