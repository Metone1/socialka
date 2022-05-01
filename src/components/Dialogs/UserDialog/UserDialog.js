import styles from './UserDialog.module.css';
import { NavLink } from 'react-router-dom';

const UserDialog = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.user_dialog}>
                <img src={props.img} alt='sm_ava' />
                <NavLink to={props.name} >
                    {props.name}
                </NavLink>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default UserDialog;