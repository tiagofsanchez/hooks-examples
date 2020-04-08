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
