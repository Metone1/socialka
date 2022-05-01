import OthePost from '../OthePost/OthePost';
import posts from '../postsData/posts';

let mapPosts = posts.map(post => {
    return <OthePost key={post.key} img={post.img} message={post.message} likesCount={post.likesCount} />
});

export default mapPosts;