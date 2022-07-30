import React from "react";
import "../styles/Meme.css";

function Meme() {
  return (
    <section>
      <form className="input--container">
        <input placeholder="Top Text" type="text" />
        <input placeholder="Bottom Text" type="text" />
      </form>
      <button>👉 new meme image 👈</button>
    </section>
  );
}

export default Meme;
