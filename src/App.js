import React, { useState } from "react";
import "./styles.css";

var dictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🐈": "Cat",
  "🦁": "Lion",
  "🦓": "Zebra",
  "🐄": "Cow",
  "🐎": "Horse",
  "🦒": "Giraffe",
  "🐘": "Elephant"
};

var animals = Object.keys(dictionary);

export default function App() {
  var [out, setOut] = useState("");

  function handleInput(event) {
    var userInput = event.target.value;

    var out = dictionary[userInput];
    if (out === undefined) {
      out = "Sorry, it's not in the databse.";
    }
    setOut(out);
  }
  function handleClick(emoji) {
    var out = dictionary[emoji];

    setOut(out);
  }

  return (
    <div className="App">
      <h1>Emoji Identifier</h1>
      <input onChange={handleInput} />

      <h2> {out} </h2>
      <h3> Animal Emojis </h3>
      {animals.map(function (emoji) {
        return (
          <span
            onClick={() => handleClick(emoji)}
            style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
