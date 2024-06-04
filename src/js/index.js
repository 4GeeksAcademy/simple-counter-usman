//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/simpleCounter.jsx";

let counter = 0;

setInterval(function(){

ReactDOM.render(<SimpleCounter seconds = {counter} />, document.querySelector("#app"));
counter ++;
},1000)