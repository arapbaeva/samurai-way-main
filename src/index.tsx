import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, RootStateType} from './State'
import {renderTree} from "./render";



renderTree(state)