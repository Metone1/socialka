import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    const selectedNavItem = () => {
        return selectItem => selectItem.isActive ? styles.active : '';
    };

    return (
        <nav className={styles.nav}>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6172/6172532.gif' alt='profile' />
                <NavLink className={selectedNavItem()} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6416/6416396.gif' alt='message' />
                <NavLink className={selectedNavItem()} to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6454/6454239.gif' alt='news' />
                <NavLink className={selectedNavItem()} to='/news'>News</NavLink>
            </div>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6172/6172517.gif' alt='music' />
                <NavLink className={selectedNavItem()} to='/music'>Music</NavLink>
            </div>
            <br />
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6569/6569144.gif' alt='settings' />
                <NavLink className={selectedNavItem()} to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;