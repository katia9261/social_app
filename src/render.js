import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostChange } from './redux/state';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { updateNewPostText } from './redux/profile-reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText} />
      </BrowserRouter>
    </React.StrictMode>);
}