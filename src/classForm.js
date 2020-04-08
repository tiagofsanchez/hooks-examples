import React, { Component } from "react";
import "./form.css";
import { ThemeContext } from "./context";
import { addEmailClassForm } from "./utils/airtableApi";

class ClassForm extends Component {
  state = {
    name: "",
    email: "",
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  onChangeHandler = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    addEmailClassForm(name, email);
  };

  render() {
    const { name, email, width } = this.state;

    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <section style={theme.themeClass}>
            <form className="form" onSubmit={this.onSubmitHandler}>
              <h1>Class form</h1>
              <input
                className="input"
                placeholder="name..."
                type="text"
                name="name"
                value={name}
                onChange={this.onChangeHandler}
              ></input>
              <input
                className="input"
                placeholder="email..."
                type="email"
                name="email"
                value={email}
                onChange={this.onChangeHandler}
              ></input>
              <button onSubmit={this.onSubmitHandler}>submit</button>
              <p>{`my window width ${width}`}</p>
            </form>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassForm;
