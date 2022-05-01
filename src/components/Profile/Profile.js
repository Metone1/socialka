import Avatar from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import mapPosts from "./mapPosts/mapPosts";
// import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <Avatar />
            <MyPosts />
            {mapPosts}
        </div >
    );
}

export default Profile;