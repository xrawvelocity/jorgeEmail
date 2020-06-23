import React from "react";
import axios from "axios";

class App extends React.Component {
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
      <div>
        <form
          action="https://app.us10.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="d7589148447452cd0d9afaf38" />
          <input type="hidden" name="id" value="3b089bb09e" />

          <div id="mergeTable" class="mergeTable">
            <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
              <label for="MERGE0">
                Email Address <span class="req asterisk">*</span>
              </label>
              <div class="field-group">
                <input
                  type="email"
                  autocapitalize="off"
                  autocorrect="off"
                  name="MERGE0"
                  id="MERGE0"
                  size="25"
                  
                />
              </div>
            </div>

            <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
              <label for="MERGE1">
                First Name <span class="req asterisk">*</span>
              </label>
              <div class="field-group">
                <input
                  type="text"
                  name="MERGE1"
                  id="MERGE1"
                  size="25"
                  
                />
              </div>
            </div>
          </div>

          <div class="submit_container clear">
            <input
              type="submit"
              class="formEmailButton"
              name="submit"
              value="Subscribe"
            />
          </div>
          <input
            type="hidden"
            name="ht"
            value="84dd622f21e875ffaa8d9b2c164902fdf9f903d4:MTU5MjkzNzIzMi4xMDI="
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
        {/* <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form> */}
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
