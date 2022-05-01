import styles from './MyPosts.module.css';
import OthePost from './OthePost/OthePost';

const MyPosts = (props) => {

    let posts = props.posts.map(post => {
        return < OthePost key={post.key} img={post.img} message={post.message} likesCount={post.likesCount} />
    });

    return (
        <div>
            <div className={styles.posts}>
                <h3>My posts</h3>
                <div className={styles.myNewPost}>
                    create new post <button></button>
                </div>
            </div>
            <div>
                {posts}
            </div>

        </div>
    );
}

export default MyPosts;
