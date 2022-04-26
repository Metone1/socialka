import Avatar from "./AvatarDiscriptions/AvatarDiscriptions";
import MyPosts from './MyPosts/MyPosts';
import OthePost from './OthePost/OthePost';
import styles from './Profile.module.css';

const Profile = () => {

    let usersArray = {
        0: 'https://www.egames.news/__export/1616008381220/sites/debate/img/2021/03/17/lana-rhoades_x2x_1.jpg_459955865.jpg',
        1: 'https://storage.googleapis.com/ares-profile-pictures/hd/officialadrianachechik_-d9d3e10a6ba51980d88924b692ed75a8_hd.jpg',
        2: 'https://www.trendycow.net/wp-content/uploads/2021/08/Riley-Reid_1-827x1024.jpg'
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