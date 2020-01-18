import React, { Component } from 'react';
import './App.css';
// import SingleUserContainer from '../components/containers/SingleUserContainer'
import SingleSessionContainer from '../components/containers/SingleSessionContainer';



class App extends Component {
  render(){
    return (
        // <SingleUserContainer/>
        <SingleSessionContainer />
    );
  }
}

export default App;
