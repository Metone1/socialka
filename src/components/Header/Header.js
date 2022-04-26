import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJ-Qh4ynpRRSaheLuvFvsS_mQxLSbI5Yh0A&usqp=CAU" alt="logo" />
        </header>
    );
}

export default Header;