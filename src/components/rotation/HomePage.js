import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StartForm from "./StartForm";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

class HomePage extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "middle" }}>
          <Link to="/waitingroom" className="ui button primary">
            Go to waiting room
          </Link>
          <button onClick={this.onSignOutClick} className="ui blue button">
            <i className="user icon" />
            Signout
          </button>
        </div>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
        <StartForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { createStream })(HomePage);
