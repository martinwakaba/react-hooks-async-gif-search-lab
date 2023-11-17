import React from "react";

import NavBar from "./NavBar";
import GiphyListContainer from "./GiphyListContainer";

// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GiphyListContainer />
    </div>
  );
}

export default App;