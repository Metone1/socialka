import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import redux_store from './store/redux_store';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderTree = () => {
    root.render(
        <React.StrictMode>
            <App store={redux_store} />
        </React.StrictMode>
    );
};

rerenderTree();

redux_store.subscribe(rerenderTree);


