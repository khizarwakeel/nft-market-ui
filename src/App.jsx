import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Herosection from "./components/herosection/herosection.jsx";
import LiveAuction from "./components/liveauctions/liveauction.jsx";
import CreativeArtist from "./components/creativeartist/creativeartist.jsx";
import MostPopular from "./components/mostpopular/mostpopular.jsx";
import ExclusiveArtist from "./components/exclusiveartist/exclusiveartist.jsx";
import CreateAndSell from "./components/createandsell/createandsell.jsx";
import Footer from "./components/footer/footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      {/* <LiveAuction/> */}
      <CreativeArtist />
      <MostPopular />
      <ExclusiveArtist />
      <CreateAndSell />
      <Footer />
    </div>
  );
};

export default App;