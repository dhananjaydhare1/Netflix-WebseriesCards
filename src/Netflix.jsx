import React from "react";
import sdata from "./Sdata";
import Cards from "./Cards";

const Netflix = () => {
  return (
    <Cards
      key={sdata[3].id}
      imgsrc={sdata[3].imgsrc}
      title={sdata[3].title}
      sname={sdata[3].sname}
      link={sdata[3].link}
    />
  );
};
export default Netflix;
