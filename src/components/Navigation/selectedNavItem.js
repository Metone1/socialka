import '../../css/App.css'

const selectedNavItem = () => {
    return selectItem => selectItem.isActive ? 'active' : '';
};

export default selectedNavItem;