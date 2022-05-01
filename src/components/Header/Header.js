import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJ-Qh4ynpRRSaheLuvFvsS_mQxLSbI5Yh0A&usqp=CAU" alt="logo" />
                <img className={styles.social} src="https://tudien.me/images_data/58d229d1c9662.png" alt="social" />
            </div>
        </header>
    );
}

export default Header;