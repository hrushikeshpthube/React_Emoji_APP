import "./styles.css";
import React from "react";
import { useState } from "react";

var username = "demo";
// username=prompt("Enter your name");
var texcolor = "gold";

export default function App() {
  const [likecountr, setlikecount] = useState(0);

  function likehandlercount() {
    // likecountr++;
    // console.log("Liked button=", likecountr);
    var newlikecountr = likecountr + 1;
    setlikecount(newlikecountr);
  }
  console.log("Liked button=", likecountr);
  return (
    <div className="App">
      <h1 style={{ backgroundColor: texcolor }}>Welcome {username}</h1>
      <button onClick={likehandlercount}>Like here</button>
      {likecountr}
    </div>
  );
}

/*
Things to notice

class->className we use className in  JSX instead of class in js
style tag -> style will use objects as an input 
and no hyphen to be used in object as it is key value pair and hence hyphen is not allowd 
so instead camelcase is used (eg-backgroundColor)

 */
