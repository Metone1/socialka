import styles from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';

const Dialogs = (props) => {

    let usersData = [
        {
            img: 'https://storage.googleapis.com/ares-profile-pictures/hd/officialadrianachechik_-d9d3e10a6ba51980d88924b692ed75a8_hd.jpg',
            message: 'hi Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            name: 'Adriana'
        },
        {
            img: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee',
            message: 'Hello',
            name: 'Johnny'
        },
        {
            img: 'https://static.blitzquotidiano.it/wp/wp-content/uploads/2019/10/martina-smeraldi-1024x821.jpg',
            message: 'What`s u name?',
            name: 'Martina'
        },
    ];

    let mapUsersData = usersData.map(user => {
        return <UserDialog key={user.name} name={user.name} img={user.img} message={user.message} />;
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
