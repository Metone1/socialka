import styles from './Dialogs.module.css';
import DialogsWithUsers from './DialogsWithUsers/DialogsWithUsers';
import { Routes, Route } from 'react-router-dom';
import DialogWithOnePerson from './DialogWithOnePerson/DialogWithOnePerson';

const Dialogs = (props) => {
    let mapUsersData = props.store.usersData.map(user => {
        return <DialogsWithUsers key={user.name} name={user.name} img={user.img} message={user.message} />;
    });

    let mapUsersRoute = props.store.usersData.map(user => {
        return <Route key={user.name} path={user.name} element={<DialogWithOnePerson data={user} />} />;
    });

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                {mapUsersData}
                <Routes>
                    {mapUsersRoute}
                </Routes>
            </div>
        </div>
    );
}

export default Dialogs;
