import styles from './Dialogs.module.css';
import mapUsersData from './mapUsersData/mapUsersData';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                {mapUsersData}
            </div>
        </div>
    );
}

export default Dialogs;
