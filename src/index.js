import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let posts = [
  {
    key: 0,
    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
    message: 'Why nodoby love me?',
    likesCount: 12,
  },
  {
    key: 1,
    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
    message: 'Hello',
    likesCount: 18,
  },
  {
    key: 2,
    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
    message: 'hi, u know me?',
    likesCount: 4,
  },
];

let usersData = [
  {
    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
    message: 'hi Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    name: 'Adriana'
  },
  {
    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
    message: 'Hello',
    name: 'Johnny'
  },
  {
    img: 'https://i.pinimg.com/736x/1f/f5/72/1ff572cda8eaaa77a55c519c4cf80779.jpg',
    message: 'What`s u name?',
    name: 'Martina'
  },
];

let navItems = [
  {
    src: 'https://cdn-icons-gif.flaticon.com/6172/6172532.gif',
    alt: 'profile'
  },
  {
    src: 'https://cdn-icons-gif.flaticon.com/6416/6416396.gif',
    alt: 'messages'
  },
  {
    src: 'https://cdn-icons-gif.flaticon.com/6454/6454239.gif',
    alt: 'music'
  },
  {
    src: 'https://cdn-icons-gif.flaticon.com/6172/6172517.gif',
    alt: 'news'
  },
  {
    src: 'https://cdn-icons-gif.flaticon.com/6569/6569144.gif',
    alt: 'settings'
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} usersData={usersData} navItems={navItems} />
  </React.StrictMode>
);

