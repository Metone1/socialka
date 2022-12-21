import './css/App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import NavigationContainer from './components/Navigation/NavigationContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className='app__wrapper'>
          <Header />
          <div className='flex__blocks'>
            <NavigationContainer />
            <div className='app__wrapper-content'>
              <Routes>
                <Route path='/messages/*' element={<DialogsContainer />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
