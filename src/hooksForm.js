import React, { useState, useContext, useEffect } from "react";
import "./form.css";
import { ThemeContext } from "./context";
import { addEmailHooksForm } from "./utils/airtableApi";

const HooksFrom = () => {
  const theme = useContext(ThemeContext);
  const name = useFormInput("")
  const email = useFormInput("")
  const width = useWindowWidth()


  const onSubmitHandler = (e) => {
    e.preventDefault();
    addEmailHooksForm(name.value, email.value );
  };

  return (
    <section style={theme.themeHooks}>
      <form className="form" onSubmit={onSubmitHandler}>
        <h1>Hooks form</h1>
        <input
          className="input"
          placeholder="name..."
          type="text"
         {...name}
        ></input>
        <input
          className="input"
          placeholder="email..."
          type="email"
         {...email}
        ></input>
        <button onSubmit={onSubmitHandler}>submit</button>
        <p>{`my window width ${width}`}</p>
      </form>
    </section>
  );
};

export default HooksFrom;

const useFormInput = (initialValue) => { 
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return {
    value, 
    onChange: onChangeHandler
  }
}

const useWindowWidth = () => { 
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return width
}