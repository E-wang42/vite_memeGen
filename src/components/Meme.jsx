import React, { useState } from "react";
import "../styles/Meme.css";

function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <section>
      <div className="input--container">
        <input placeholder="Top Text" type="text" />
        <input placeholder="Bottom Text" type="text" />
      </div>
      <button onClick={getMemeImage}>👉 new meme image 👈</button>
      <img className="memeImage" src={memeImage} alt="memeImg" />
    </section>
  );
}

export default Meme;
