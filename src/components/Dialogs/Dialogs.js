import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={styles.dialog}>
            <div>
                <img src='https://storage.googleapis.com/ares-profile-pictures/hd/officialadrianachechik_-d9d3e10a6ba51980d88924b692ed75a8_hd.jpg' />
            </div >
            <div className={styles.message}>
                <p>Hi dude Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim laborum doloremque totam voluptas. Illo minima in voluptatibus quia expedita numquam, totam, enim vitae placeat cum aut impedit blanditiis nisi!</p>
            </div>

            <div>
                <img src='https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee' />
            </div >
            <div className={styles.message}>
                <p>Hi dude Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>
    );
}

export default Dialogs;