import '../../css/App.css'
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import selectedNavItem from './selectedNavItem';


const Navigation = (props) => {
    let mapNavigation = props.navbar.navItems.map((item) => {
        return <div className='navigation__block' key={item.alt}><img className='navigation__image' src={item.src} alt={item.alt} />
            <NavLink className={selectedNavItem()} to={item.alt}>{item.alt[0].toUpperCase() + item.alt.slice(1)}</NavLink>
        </div>
    });

    return (
        <nav className='navigation'>
            {mapNavigation}
            <Friends friends={props.navbar.friends} />
        </nav>
    );
}

export default Navigation;