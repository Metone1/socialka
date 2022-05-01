import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import selectedNavItem from './selectedNavItem';


const Navigation = (props) => {

    let mapNavigation = props.navItems.map((item) => {
        return <div key={item.alt}><img src={item.src} alt={item.alt} />
            <NavLink className={selectedNavItem()} to={item.alt}>{item.alt[0].toUpperCase() + item.alt.slice(1)}</NavLink>
        </div>
    });

    return (
        <nav className={styles.nav}>
            <div>
                {mapNavigation}
            </div>
        </nav>
    );
}

export default Navigation;