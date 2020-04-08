import React, { useState, useContext, useEffect } from "react";
import "./form.css";
import { ThemeContext } from "./context";
import { addEmailHooksForm } from "./utils/airtableApi";

const HooksFrom = () => {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const onChangeHandlerName = (e) => {
    setName(e.target.value);
  };
  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addEmailHooksForm(name, email);
  };

  return (
    <section style={theme.themeHooks}>
      <form className="form" onSubmit={onSubmitHandler}>
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
        <button onSubmit={onSubmitHandler}>submit</button>
        <p>{`my window width ${width}`}</p>
      </form>
    </section>
  );
};

export default HooksFrom;
