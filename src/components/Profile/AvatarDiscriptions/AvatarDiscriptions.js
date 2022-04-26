import styles from './AvatarDiscriptions.module.css';

const AvatarDiscriptions = () => {
    return (
        <div className={styles.ava}>
            <div className={styles.photo}>
                <img className={styles.img} src="https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/_Sp5DDvTXOQLYpneOrTDt4y-NEnUVNMrnUTmZUOjgRWKBdJsi4k94YygyAkDqAWqcdnHmtFJUGxyG_CB_u3VG__Y.jpg?size=200x250&quality=95&crop=42,121,652,815&ava=1" alt="ava" />
            </div>
            <div className={styles.discription}>
                Evgeny Chernov
            </div>
        </div>
    );
}

export default AvatarDiscriptions;