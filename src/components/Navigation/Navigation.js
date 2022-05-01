import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import selectedNavItem from './selectedNavItem';
import Friends from '../Friends/Friends';


const Navigation = (props) => {
    let mapNavigation = props.sidebar.sidebar.navItems.map((item) => {
        return <div key={item.alt}><img className={styles.nav_image} src={item.src} alt={item.alt} />
            <NavLink className={selectedNavItem()} to={item.alt}>{item.alt[0].toUpperCase() + item.alt.slice(1)}</NavLink>
        </div>
    });

    return (
        <nav className={styles.nav}>
            <div>
                {mapNavigation}
            </div>
            <Friends friends={props.sidebar.sidebar.friends} />
        </nav>
    );
}

export default Navigation;