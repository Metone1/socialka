import styles from './OthePost.module.css';

const OthePost = (props) => {
    return (
        <div className={styles.post}>
            <div>
                <img src={props.img} />
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default OthePost;