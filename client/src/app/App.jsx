import React, { Component } from 'react';
import './App.css';
import SingleUserContainer from '../components/containers/singleUserContainer'
import SingleSessionContainer from '../components/containers/singleSessionContainer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
    render(){
		const SingleUserComponent = () => <SingleUserContainer/>
        const SingleStudySessionComponent = () => <SingleSessionContainer />

        return (
            <div>
				<Router>
					<Switch>
						{/* <div className="App">
							<div className="App-header"> */}
								<Route exact path="/" render={SingleUserComponent}/>
								<Route exact path="/study_sessions/:sessionId" render={SingleStudySessionComponent}/>
							{/* </div>
						</div> */}
					</Switch>
				</Router>
			</div>
        );
    }
}

export default App;
