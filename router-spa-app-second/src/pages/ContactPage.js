import React from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';

class ContactPage extends React.Component {

  state = {
    value: "",
    isEmpty: true
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      value: "",
      isEmpty: true
    })
  }

  handleChange = (event) => {
    if (event.target.value.length > 0) {
      this.setState({
        value: event.target.value,
        isEmpty: false,
      })
    } else {
      this.setState({
        value: event.target.value,
        isEmpty: true
      })
    }
  }

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Write to us</h3>
          <textarea placeholder="Fill up form" value={this.state.value} onChange={this.handleChange}></textarea>
          <button>Send</button>
        </form>
        <Prompt
          when={!this.state.isEmpty}
          message="Form is not filled up. Do U really want to escape this site?"
        />
      </div>
    );
  }
}

export default ContactPage;