import React, { Component } from "react";
import RoutesView from "./RoutesView";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { me, logout } from '../../store/actions/actionCreatorsThunks';

class RoutesContainer extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/login");
  }

  // onClickHandleId = () => {
  //   console.log("WHAT THE ");
  //   this.props.history.push(`/study_session/${this.props.userId}`);
  // }

  render() {
    return <RoutesView 
            isLoggedIn={this.props.isLoggedIn} 
            handleLogout={this.handleLogout} 
            userId={this.props.userId}
            onClickHandleId={this.onClickHandleId}/>
  }
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.userAuth.id,
    userId: state.userAuth.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData: () => dispatch(me()),
    logout: () => dispatch(logout())
    
  }
}

export default withRouter(connect(mapState, mapDispatch)(RoutesContainer));