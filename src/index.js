// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <h1>hello!!</h1>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// 1st example-----------------------------------------------------------------------------------

// import React from 'react';
// import ReactDom from 'react-dom';
// let img1 = 'https://picsum.photos/200/300';
// const link ='https://www.youtube.com/watch?v=OloAP8p1k1w&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=14'
// const name = 'sonu';
// ReactDom.render(
//     <>
//     <h1 contentEditable="true"> my name is {name}</h1>,
//     <a href={link}><img src={img1}/>
//     </a>

//     </>
//     ,document.getElementById('root'));
// import React from 'react';
// import ReactDom from 'react-dom';

//------------------------------------ #13  -------------------------------------------------------------------------------------//
// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';

// const  heading = {
//     color: "purple", textAlign: "center", textTransform: "capitalize",
//     fontWeight: "bold", textShadow: "0px 2px 4px cyan" ,
//     margin: "70px 0",

//     fontFamily: "Anta",
//     fontWeight: "400",
//     fontStyle: "normal",

// }

// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";
// const img4 = "https://picsum.photos/200/300";
// ReactDom.render(
//     <>
/* <h1> Jai Shri RAM</h1>
        <p> Har Har MAHADEV</p>
        <ol>
            <li>Money Heist</li>
            <li>Game of Thrones</li>
            <li>Breaking Bad</li>
            
        </ol> */

// #16 -----below is a heading variable in {} this is examle of inline CSS ------
//         <h1 style={heading}>My name is Dhare</h1>
// <div className='img_div'>
//         <img src={img2} alt='random img '/>
//         <img src={img3} alt='random img '/>

//         <a href='https://picsum.photos/' target='_blank'>
//         <img src={img4} alt='random img '/>
//         </a>
// </div>
//     </>
//     ,document.getElementById('root'));

//--------------------------------------#14----------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import ReactDom from 'react-dom';
// import './index.css';

// const img2 = "https://picsum.photos/200/300";
// const img3 = "https://picsum.photos/200/300";
// const img4 = "https://picsum.photos/200/300";

// ReactDom.render(
//     <>
//         <h1 className='heading'>My name is Dhare</h1>

//     </>
//     ,document.getElementById('root'));
// <div className='img_div'>
//         <img src={img2} alt='random img '/>

//         <img src={img3} alt='random img '/>

//         <a href='https://picsum.photos/' target='_blank'>
//         <img src={img4} alt='random img '/>
//         </a>
// </div>

// #17 Greeting website-----------

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// let curDate = new Date(2024, 2, 22, 1);
// curDate = curDate.getHours();

// let greeting = " ";
// const cssStyle = {};

// if (curDate >= 1 && curDate < 12) {
//   greeting = "Goog Mornig";
//   cssStyle.color = "green";
// } else if (curDate >= 12 && curDate < 19) {
//   greeting = "Good Afternoon";
//   cssStyle.color = "orange";
// } else {
//   greeting = "Good Night";
//   cssStyle.color = "purple";
// }

// ReactDOM.render(
//   <>
//     <div className="div">
//       <h1>
//         Hello sir <span style={cssStyle}>{greeting}</span>{" "}
//       </h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );







//---------------------------------// # 22 netflix series cards//----------------------------------//

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import sdata from "./Sdata";
import Cards from "./Cards";
import App from "./App";

ReactDOM.render(
  <App />,
  
  document.getElementById("root")
);
