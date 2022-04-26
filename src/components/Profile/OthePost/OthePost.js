import styles from './OthePost.module.css';

const OthePost = (props) => {
    return (
        <div className={styles.post}>
            <img src={props.img} />
            <div className={styles.message}>
                <p>{props.message}</p>
            </div>
            <div className={styles.like}>
                <img src="https://i.pinimg.com/originals/63/3b/2e/633b2ea2a96ceaa39669a86dac0f3c01.jpg" />
                <div className={styles.likesCount}>
                    {props.likesCount}
                </div>
            </div>
        </div >
    );
}

export default OthePost;