import React, { Component } from "react";
import "./form.css";
import { ThemeContext } from "./context";

class ClassForm extends Component {
  state = {
    name: "",
    email: "",
  };

  onChangeHandlerName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeHandlerEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const { name, email } = this.state;

    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <section style={theme.themeClass}>
            <form className="form">
              <h1>Class form</h1>
              <input
                className="input"
                placeholder="name..."
                type="text"
                name="name"
                value={name}
                onChange={this.onChangeHandlerName}
              ></input>
              <input
                className="input"
                placeholder="email..."
                type="email"
                name="email"
                value={email}
                onChange={this.onChangeHandlerEmail}
              ></input>
              <button>submit</button>
            </form>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ClassForm;
