import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remaining: props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      remaining: (this.props.maxChars - event.target.value.length) 
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div>
          Remaining characters: {this.state.remaining}
        </div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
