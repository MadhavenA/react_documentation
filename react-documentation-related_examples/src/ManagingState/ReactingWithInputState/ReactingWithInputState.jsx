import React from "react";

export default class ReactingWithInputState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      status: "",
      messageStatus: "",
      error: "",
      isTrue: false,
    };
  }

  handleOnClick = () => {

    if (this.state.answer === "test") {
      this.setState({
        messageStatus: "Your Answer is correct",
        isTrue: true,
      });
    } else {
      this.setState({ messageStatus: "your Answer is Wrong", isTrue: true });
      alert("false");
    }
  };
  render() {
    return (
      <>
        {!this.state.isTrue ? (
          <div>
            <h1>What is Your name ?</h1>
            <input
              type="text"
              value={this.state.answer}
              onChange={(e) => this.setState({ answer: e.target.value })}
            />
            <br />
            <br />
            <button onClick={this.handleOnClick}>check</button>
            <br />
            <br />
            {this.state.answer.length !== 0 ? "typing..." : ""}
          </div>
        ) : (
          <div>
            <p className="Error">{this.state.messageStatus}</p>
          </div>
        )}
      </>
    );
  }
}
