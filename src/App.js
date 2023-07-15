import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "😂": "Face with Tears of Joy",
  "🥹": "Face Holding Back Tears",
  "😭": "Loudly Crying Face",
  "👀": "Eyes",
  "❤️": "Red Heart",
  "🥡": "Takeout Box",
  "👍": "Thumbs Up"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);

    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    // console.log(emoji);
  }

  return (
    <div className="App">
      <h1>inside outtt</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.8rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
