import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div><img src="https://cdn-icons-gif.flaticon.com/6172/6172532.gif" /><a href='/profile'>Profile</a></div>
            <div><img src="https://cdn-icons-gif.flaticon.com/6416/6416396.gif" /><a href='/dialogs'>Messages</a></div>
            <div><img src="https://cdn-icons-gif.flaticon.com/6454/6454239.gif" /><a href='/news'>News</a></div>
            <div><img src="https://cdn-icons-gif.flaticon.com/6172/6172517.gif" /><a href='/music'>Music</a></div>
            <br />
            <div><img src="https://cdn-icons-gif.flaticon.com/6569/6569144.gif" /><a href='/settings'>Settings</a></div>
        </nav>
    );
}

export default Navigation;