import styles from './Dialogs.module.css';
import DialogsWithUsers from './DialogsWithUsers/DialogsWithUsers';

const Dialogs = (props) => {

    let mapUsersData = props.usersData.map(user => {
        return <DialogsWithUsers key={user.name} name={user.name} img={user.img} message={user.message} />;
    });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                {mapUsersData}
            </div>
        </div>
    );
}

export default Dialogs;
