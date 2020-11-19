import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    this.setState({
      remainingChars: this.state.remainingChars - this.state.message.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
            onChange={ this.handleChange }
            value={this.state.message}
            />
        <p>There are {this.state.remainingChars} chars remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
