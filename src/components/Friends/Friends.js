import '../../css/App.css'

const Friends = (props) => {

    let mapFriends = props.friends.map((friend) => {
        return <div className='friend' key={friend.image}><img className='friend__image' src={friend.image} alt={friend.name} /><p>{friend.name}</p></div>
    });

    return (
        <div className='friends'>
            <p className='friends__title'>Friends online</p>
            {mapFriends}
        </div>
    );
};

export default Friends;