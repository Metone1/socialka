import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6172/6172532.gif' /><NavLink className={(navData) => navData.isActive ? styles.active : ''} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6416/6416396.gif' /><NavLink className={(navData) => navData.isActive ? styles.active : ''} to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6454/6454239.gif' /><NavLink className={(navData) => navData.isActive ? styles.active : ''} to='/news'>News</NavLink>
            </div>
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6172/6172517.gif' /><NavLink className={(navData) => navData.isActive ? styles.active : ''} to='/music'>Music</NavLink></div>
            <br />
            <div>
                <img src='https://cdn-icons-gif.flaticon.com/6569/6569144.gif' /><NavLink className={(navData) => navData.isActive ? styles.active : ''} to='/settings'>Settings</NavLink>
            </div>
        </nav>
    );
}

console.log(styles)

export default Navigation;