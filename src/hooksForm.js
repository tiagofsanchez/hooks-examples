import React, { useState , useContext } from "react";
import "./form.css";
import { ThemeContext } from './context'

const HooksFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const theme = useContext(ThemeContext)

  const onChangeHandlerName = e => {
    setName(e.target.value)
  }
  const onChangeHandlerEmail = e => { 
    setEmail(e.target.value)
  }
  
  return (
    <section style={theme.themeHooks}>
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
