import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return <i className="large middle aligned icon user green" />;
    }
    return <i className="large middle aligned icon user blue" />;
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <div className="content">
            {stream.id}
            <div className="description">{stream.email}</div>
          </div>
        </div>
      );
    });
  }

  renderStartGame() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/shapesgameboard" className="ui button primary">
            Start Game
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Room Members</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderStartGame()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
