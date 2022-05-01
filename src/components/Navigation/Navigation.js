import styles from './Navigation.module.css';
import navigationItem from './navigationItem';

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div>
                {navigationItem}
            </div>
        </nav>
    );
}

export default Navigation;