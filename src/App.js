import './css/App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <div className='flex__blocks'>
          <Navigation store={props.store.getState().sidebar} />
          <div className='app__wrapper-content'>
            <Routes>
              <Route path='/messages/*' element={<Dialogs store={props.store} />} />
              <Route path='/profile' element={<Profile store={props.store} />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
