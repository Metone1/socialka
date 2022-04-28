import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={styles.ava}>
            <div className={styles.photo}>
                <img className={styles.img} src="https://sun9-29.userapi.com/s/v1/if2/IruS_WEp0vD8iCg505ukmo4bGgGt0SvWl3ob3Uc4ms5Y3lWf6sRzR4ZbYtFoUABd5H87FxRwkPzVUAKII6YwllKv.jpg?size=853x1080&quality=96&type=album" alt="ava" />
            </div>
            <div className={styles.discription}>
                Evgeny Chernov
            </div>
        </div>
    );
}

export default ProfileInfo;