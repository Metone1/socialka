import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
// import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} addPost={props.addPost} />
        </div >
    );
}

export default Profile;