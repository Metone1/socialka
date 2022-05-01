import styles from './Navigation.module.css';

const selectedNavItem = () => {
    return selectItem => selectItem.isActive ? styles.active : '';
};

export default selectedNavItem;