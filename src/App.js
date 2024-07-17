import React from "react";
import "./index.css";
import sdata from "./Sdata";
import Cards from "./Cards";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Amazon";

const App = () => (
  <>
    <h1 className="heading_style">Top 5 Netflix Series in </h1>
    {favSeries == "Amazon" ? <Amazon /> : <Netflix />}
  </>
);
export default App;
