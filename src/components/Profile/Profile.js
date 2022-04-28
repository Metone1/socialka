import Avatar from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import OthePost from './OthePost/OthePost';
// import styles from './Profile.module.css';

const Profile = (props) => {


    let posts = [
        {
            key: 0,
            img: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee',
            message: 'Why nodoby love me?',
            likesCount: 12,
        },
        {
            key: 1,
            img: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee',
            message: 'Hello',
            likesCount: 18,
        },
        {
            key: 2,
            img: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee',
            message: 'hi, u know me?',
            likesCount: 4,
        },
    ];

    let mapPosts = posts.map(post => {
        return <OthePost key={post.key} img={post.img} message={post.message} likesCount={post.likesCount} />
    });

    return (
        <div>
            <Avatar />
            <MyPosts />
            {mapPosts}
        </div >
    );
}

export default Profile;