import React from "react";
import sdata from "./Sdata";
import Cards from "./Cards";

const Amazon = () => {
  return (
    <>
      <Cards
        key={sdata[1].id}
        imgsrc={sdata[1].imgsrc}
        title={sdata[1].title}
        sname={sdata[1].sname}
        link={sdata[1].link}
      />

      <Cards
        key={sdata[2].id}
        imgsrc={sdata[2].imgsrc}
        title={sdata[2].title}
        sname={sdata[2].sname}
        link={sdata[2].link}
      />
      <Cards
        key={sdata[0].id}
        imgsrc={sdata[0].imgsrc}
        title={sdata[0].title}
        sname={sdata[0].sname}
        link={sdata[0].link}
      />
      <Cards
        key={sdata[4].id4}
        imgsrc={sdata[4].imgsrc}
        title={sdata[4].title}
        sname={sdata[4].sname}
        link={sdata[4].link}
      />
      <Cards
        key={sdata[3].id}
        imgsrc={sdata[3].imgsrc}
        title={sdata[3].title}
        sname={sdata[3].sname}
        link={sdata[3].link}
      />
      <Cards
        key={sdata[2].id}
        imgsrc={sdata[2].imgsrc}
        title={sdata[2].title}
        sname={sdata[2].sname}
        link={sdata[2].link}
      />
    </>
  );
};
export default Amazon;
