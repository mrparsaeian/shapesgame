import React from "react";
import ReactCardFlip from "react-card-flip";
class UserCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div>
          F<button onClick={this.handleClick}>Click</button>
        </div>

        <div>
          B 
          <button onClick={this.handleClick}>Click</button>
        </div>
      </ReactCardFlip>
    );
  }
}
export default UserCard;
