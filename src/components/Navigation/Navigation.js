import '../../css/App.css'
import { NavLink } from 'react-router-dom';
import selectedNavItem from './selectedNavItem';
import Friends from '../Friends/Friends';


const Navigation = (props) => {
    let mapNavigation = props.store.navItems.map((item) => {
        return <div className='navigation__block' key={item.alt}><img className='navigation__image' src={item.src} alt={item.alt} />
            <NavLink className={selectedNavItem()} to={item.alt}>{item.alt[0].toUpperCase() + item.alt.slice(1)}</NavLink>
        </div>
    });

    return (
        <nav className='navigation'>
            {mapNavigation}
            <Friends friends={props.store.friends} />
        </nav>
    );
}

export default Navigation;