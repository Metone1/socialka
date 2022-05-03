import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import App from '../App';
import { addPost } from '../state/state';
import { updateNewPostChange } from '../state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange} />
        </React.StrictMode>
    );
};