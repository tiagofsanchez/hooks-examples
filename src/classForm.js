import React from "react";
import "./form.css";

const ClassForm = () => {
  return (
    <section>
      <form className="form">
        <h1>Class form</h1>
        <input className="input" placeholder="name..." type="text"></input>
        <input className="input" placeholder="email..." type="email"></input>
        <button>submit</button>
      </form>
    </section>
  );
};

export default ClassForm;
