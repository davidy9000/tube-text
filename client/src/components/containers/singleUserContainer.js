import React, { Component } from 'react';
import SingleUserView from './singleUserView';
import { connect } from 'react-redux';
import { fetchSessionsThunk } from '../../store/actions/actionCreatorsThunks';

// class SingleUserContainer extends Component {
//     render(){
//         return{
//             <div>
//             Hello World </div>
//         }
//     }
// }