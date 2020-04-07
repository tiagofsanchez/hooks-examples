import React from "react";
import "./form.css";

const HooksFrom = () => {
  return (
    <section>
      <form className="form">
        <h1>Hooks form</h1>
        <input className="input" placeholder="name..."></input>
        <input className="input" placeholder="email..."></input>
        <button>submit</button>
      </form>
    </section>
  );
};

export default HooksFrom;
