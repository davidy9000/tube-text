import React, { Component } from 'react';
import './App.css';

import RoutesContainer from "../components/routes/RoutesContainer";






// const style = {
//     // color: 'white',
//     textDecoration: 'none'
// };



// class App extends Component {
const App = () => {

    return (
        <div className="App">
            <header className="App-header">
                <RoutesContainer/>
            </header>
        </div>
    );

}

export default App;
