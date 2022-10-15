//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";



let counter = 0;

/*export default function reload () {
    clearInterval(counter) 
} ***to stop the count***
*/

export default function reload () {
    counter= 0; //to restart the count//
}

setInterval(function() {
    const one = Math.floor(counter/1).toString()
    const two = Math.floor(counter/10).toString()
    const three = Math.floor(counter/100).toString()
    const four = Math.floor(counter/1000).toString()
    counter ++;
ReactDOM.render(<Home digitOne={one[one.length-1]} digitTwo = {two[two.length -1]} digitThree = {three[three.length-1]} digitFour = {four[four.length-1]}/>, document.querySelector("#app"));
},1000)



