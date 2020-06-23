import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FNAME: "",
      EMAIL: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url:
        "https://app.us10.list-manage.com/subscribe/post?u=d7589148447452cd0d9afaf38&amp;id=3b089bb09e",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ FNAME: "", EMAIL: "" });
  }

  render() {
    return (
      <div className="app">
        <img className="logo" src="./stocklogo.png" alt='logo'/>
        <form
          action="https://app.us10.list-manage.com/subscribe/post"
          method="POST"
          className="form"
        >
          <h2 className="title">Join our waitlist to be notified when our course is released</h2>
          <input type="hidden" name="u" value="d7589148447452cd0d9afaf38" />
          <input type="hidden" name="id" value="3b089bb09e" />

          <div className="group">
            <input type="text" name="MERGE1" id="MERGE1" size="25" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Name</label>
          </div>

          <div className="group">
            <input
              type="email"
              autocapitalize="off"
              autocorrect="off"
              name="MERGE0"
              id="MERGE0"
              size="25"
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Email</label>
          </div>

          <div>
            <input className="btn" type="submit" name="submit" value="Join waitlist" />
          </div>

          <input
            type="hidden"
            name="ht"
            value="84dd622f21e875ffaa8d9b2c164902fdf9f903d4:MTU5MjkzNzIzMi4xMDI="
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ FNAME: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ EMAIL: event.target.value });
  }
}

export default App;
