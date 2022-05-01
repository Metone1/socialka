import styles from './Friends.module.css';

const Friends = (props) => {

    let mapFriends = props.friends.map((friend) => {
        return <div key={friend.image}><img className={styles.friends_image} src={friend.image} alt={friend.name} /><p>{friend.name}</p></div>
    });

    return (
        <div className={styles.friends}>
            <h4>Friends online</h4>
            {mapFriends}
        </div>
    );
};

export default Friends;