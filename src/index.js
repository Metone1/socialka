import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () => {
    root.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>
    );
};

rerenderTree();

store.subscribe(rerenderTree);


