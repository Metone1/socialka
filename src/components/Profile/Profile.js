import Avatar from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import OthePost from './OthePost/OthePost';
import styles from './Profile.module.css';

const Profile = () => {

    let usersArray = {
        0: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee',
        1: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee',
        2: 'https://preview.redd.it/4mc6mm2j3ih41.jpg?auto=webp&s=224ba0734fc5aa1349497ae4b6f8c9d3d9f40dee'
    };

    let messageArray = {
        0: 'Why nodoby love me?',
        1: 'Hello',
        2: 'hi, u know me?'
    };

    return (
        <div>
            <Avatar />
            <MyPosts />
            <OthePost img={usersArray[0]} message={messageArray[0]} likesCount='4' />
            <OthePost img={usersArray[1]} message={messageArray[1]} likesCount='5' />
            <OthePost img={usersArray[2]} message={messageArray[2]} likesCount='7' />
        </div>
    );
}

export default Profile;