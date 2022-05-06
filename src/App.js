import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './store/store';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <Navigation store={props.store.getState().sidebar} />
        <div className='app_wrapper_content'>
          <Routes>
            <Route path='/messages/*' element={<Dialogs store={props.store.getState().messagesPage} />} />
            <Route path='/profile' element={<Profile store={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(store)} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
