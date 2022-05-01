import { NavLink } from 'react-router-dom';
import selectedNavItem from './selectedNavItem';
import navItems from './navItems';

let navigationItem = navItems.map((item) => {
    return <div key={item.alt}><img src={item.src} alt={item.alt} />
        <NavLink className={selectedNavItem()} to={item.alt}>{item.alt[0].toUpperCase() + item.alt.slice(1)}</NavLink>
    </div>
});

export default navigationItem;