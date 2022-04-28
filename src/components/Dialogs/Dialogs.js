import styles from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';

const Dialogs = (props) => {

    let imgUserArray = {
        0: 'https://storage.googleapis.com/ares-profile-pictures/hd/officialadrianachechik_-d9d3e10a6ba51980d88924b692ed75a8_hd.jpg',
        1: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee',
        2: 'https://static.blitzquotidiano.it/wp/wp-content/uploads/2019/10/martina-smeraldi-1024x821.jpg'
    };

    let messageArray = {
        0: 'hi Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        1: 'Hello',
        2: 'What`s u name?'
    };

    let names = {
        0: 'Adriana',
        1: 'Johnny',
        2: 'Martina'
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_item}>
                <UserDialog name={names[0]} img={imgUserArray[0]} message={messageArray[0]} />
                <UserDialog name={names[1]} img={imgUserArray[1]} message={messageArray[1]} />
                <UserDialog name={names[2]} img={imgUserArray[2]} message={messageArray[2]} />
            </div>
        </div>
    );
}

export default Dialogs;
