import React, { Component } from 'react';
import './App.css';
import SingleUserContainer from '../components/containers/singleUserContainer'
import SingleSessionContainer from '../components/containers/singleSessionContainer';



class App extends Component {
  render(){
    return (
        <SingleUserContainer/>
        // <SingleSessionContainer />
    );
  }
}

export default App;
