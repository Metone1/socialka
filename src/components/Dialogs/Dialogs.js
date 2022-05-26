import styles from './Dialogs.module.css';
import DialogsWithUsers from './DialogsWithUsers/DialogsWithUsers';
import { Routes, Route } from 'react-router-dom';
import DialogWithOnePersonContainer from './DialogWithOnePerson/DialogWithOnePersonContainer';

const Dialogs = (props) => {
    let mapUsersData = props.store.getState().messagesPage.usersData.map(user => {
        return <DialogsWithUsers key={user.id} name={user.name} img={user.img} message={user.message} />;
    });

    let mapUsersRoute = props.store.getState().messagesPage.usersData.map(user => {
        return <Route key={user.id} path={user.name} element={<DialogWithOnePersonContainer data={user} store={props.store} />} />;
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
