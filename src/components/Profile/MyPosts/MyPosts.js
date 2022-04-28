import styles from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div className={styles.posts}>
            <h3>My posts</h3>
            <div className={styles.myNewPost}>
                create new post <button></button>
            </div>
        </div>
    );
}

export default MyPosts;
