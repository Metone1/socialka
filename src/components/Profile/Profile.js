import Avatar from "./AvatarDiscriptions/AvatarDiscriptions";
import MyPosts from './MyPosts/MyPosts';
import OthePost from './OthePost/OthePost';
import styles from './Profile.module.css';

const Content = () => {

    let imgArray = {
        0: 'https://www.egames.news/__export/1616008381220/sites/debate/img/2021/03/17/lana-rhoades_x2x_1.jpg_459955865.jpg',
        1: 'https://storage.googleapis.com/ares-profile-pictures/hd/officialadrianachechik_-d9d3e10a6ba51980d88924b692ed75a8_hd.jpg',
        2: 'https://www.trendycow.net/wp-content/uploads/2021/08/Riley-Reid_1-827x1024.jpg'
    }

    return (
        <div className={styles.content}>
            <Avatar />
            <MyPosts />
            <OthePost img={imgArray[0]} message='Why nodoby love me?' />
            <OthePost img={imgArray[1]} message='Hello' />
            <OthePost img={imgArray[2]} message='just some post' />
        </div>
    );
}

export default Content;