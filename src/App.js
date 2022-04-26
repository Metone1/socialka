import React from 'react';
import './App.css';
import Content from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;
