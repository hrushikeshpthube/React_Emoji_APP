import "./styles.css";
import React from "react";
import { useState } from "react";

//var username = "demo";
// username=prompt("Enter your name");
//var texcolor = "gold";

export default function App() {
  var emojidictionary = {
    "😊": "Smiling Face ",
    "😔": "Sad",
    "😲": "Surprised",
    "🐕": "dog",
    "💎": "Diamond",
  };
  /*  var [likecountr, setlikecount] = useState(0);
//Below likehandlercount to try for like button like on  instagram
  function likehandlercount() {
    // likecountr++;
    // console.log("Liked button=", likecountr);
    var newlikecountr = likecountr + 1;
    setlikecount(newlikecountr);
  }
*/
  /* var [userinput, setinputevent] = useState("");
  function inputhandler(event) {
    console.log(event.target);
    console.log(event.target.value);
    setinputevent(event.target.value);
  }
  */
  /*  console.log("Liked button=", likecountr);*/

  var [meaning, setemojihandler] = useState("");
  var emojisweknow = Object.keys(emojidictionary);
  function clearinput() {
    var temp = document.getElementById("inp");
    temp.value = "";
  }
  function Emojihandler(event) {
    var userinput = event.target.value;
    var meaning = emojidictionary[userinput];
    // console.log(event.target.value);
    console.log(meaning);
    if (userinput in emojidictionary) {
      setemojihandler(emojidictionary[userinput]);
    } else {
      setemojihandler("We don't have this emoji in our database");
    }
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    clearinput();
    var meaning = emojidictionary[emoji];

    setemojihandler(emojidictionary[emoji]);
  }

  return (
    <div className="App">
      {/* <h1 style={{ backgroundColor: texcolor }}>Welcome {username}</h1>
      <button onClick={likehandlercount}>Like here</button>
      {likecountr}
      <br></br> */}
      <h1>Welcome to Emoji Iterpreter</h1>
      <h3>
        Enter an emoji to know meaning of it <br></br>OR<br></br>you can click
        on below set of emojis
      </h3>
      <input id="inp" onChange={Emojihandler}></input>
      <h2>Meaning ={meaning} </h2>
      <h3>Emojis we Know</h3>
      {emojisweknow.map(function (emoji) {
        {
          {
            return (
              <span
                onClick={() => emojiClickHandler(emoji)}
                style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
                keys={emoji} //this is to avoid this warning ->Warning: Each child in a list should have a unique "key" prop.
              >
                {emoji}
              </span>
            );
          }
        }
      })}
      {/* Welcome {userinput} */}
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
