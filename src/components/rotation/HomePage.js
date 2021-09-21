import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StartForm from "../authentication/UserPasswordLoginForm";
import { Link } from "react-router-dom";
import Authentication from "../authentication/Authentication";
import "./HomePage.css";
class HomePage extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  

  render() {
    return (
      <div>
        <div className="ui placeholder segment">
          <Authentication />
          {/* <div class="ui hidden vertical divider">Or</div> */}
        </div>
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
