import React, { useState, useEffect } from "react";
import "../styles/Meme.css";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [memeImage, setMemeImage] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => setMemeImage(data.data.memes));
  // }, []);

  useEffect(() => {
    async function fetchMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemeImage(data.data.memes);
    }
    fetchMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memeImage.length);
    const url = memeImage[randomNumber].url;
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
      <div className="meme">
        <img className="memeImage" src={meme.randomImage} alt="memeImg" />
        <h2 className="text--top">{meme.topText}</h2>
        <h2 className="text--bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}

export default Meme;
