import React, { useState } from "react";
import "./form.css";

const HooksFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChangeHandlerName = e => {
    setName(e.target.value)
  }
  const onChangeHandlerEmail = e => { 
    setEmail(e.target.value)
  }
  
  return (
    <section>
      <form className="form">
        <h1>Hooks form</h1>
        <input
          className="input"
          placeholder="name..."
          value={name}
          onChange={onChangeHandlerName}
        ></input>
        <input
          className="input"
          placeholder="email..."
          value={email}
          onChange={onChangeHandlerEmail}
        ></input>
        <button>submit</button>
      </form>
    </section>
  );
};

export default HooksFrom;
