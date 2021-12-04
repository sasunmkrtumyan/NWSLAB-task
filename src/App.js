import React from "react";
import { Categories } from "./features/categories/Categories";
import { Cats } from "./features/cats/Cats";
import "./App.scss";
import "./styles/scssReset.scss";

function App() {
  return (
    <div className="main">
      <div className="categDiv">
        <Categories />
      </div>
      <div className="catsDiv">
        <Cats />
      </div>
    </div>
  );
}

export default App;
