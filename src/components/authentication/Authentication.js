import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import { Link } from "react-router-dom";
import UserPasswordLoginForm from "./UserPasswordLoginForm";
import "./Authentication.css";
class Authentication extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            // '797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
            "193426547449-0b876ea8btalp2uj4mc88sovse2c931q.apps.googleusercontent.com",
            // "193426547449-jp277e3qv06paakrr6f866v8v25uu7aa.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuth() {
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
        <div className="ui two stackable cards ">
          <div className="card">
            <UserPasswordLoginForm onSubmit={this.onSubmit} />
          </div>
          <div className="middle aligned card">
            <div className="ui form">
              <button
                onClick={this.onSignInClick}
                className="ui red google button servicebuttons "
              >
                <i className="google icon" />
                Sign In with Google
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderAuth()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Authentication);
