import React, { useState } from "react";
import "../styles/Meme.css";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://imgur.com/pC7xVnn",
  });
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    setMeme((prevMemeImage) => {
      return { ...prevMemeImage, randomImage: url };
    });
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  }

  return (
    <section>
      <div className="input--container">
        <input
          placeholder="Top Text"
          type="text"
          onChange={handleInput}
          name="topText"
          value={meme.topText}
        />
        <input
          placeholder="Bottom Text"
          type="text"
          onChange={handleInput}
          name="bottomText"
          value={meme.bottomText}
        />
      </div>
      <button onClick={getMemeImage}>👉 new meme image 👈</button>
      <img className="memeImage" src={meme.randomImage} alt="memeImg" />
    </section>
  );
}

export default Meme;
