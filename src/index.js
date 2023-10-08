import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const number = [7];
const firstname = "sai vamshi krishna";
const lastname = "Gardas";
ReactDOM.render(
  //rendering componets
  <div>
    <div>
      <p id="p1">
        <u>Hello world i am vamshi2.0</u>
      </p>
      <p id="p2">I KNOW YOU CAN DO IT!</p>
      <h1>
        my lucky numebr is :<b id="n">{number}</b>{" "}
      </h1>
    </div>
    <div>
      <p>
        <h1>
          my name is : {firstname} {lastname}
        </h1>
      </p>
    </div>
  </div>,
  document.getElementById("root")
);
