import '../../../../css/App.css';

const OthePosts = (props) => {
    return (
        <div className="othePosts">
            <img src={props.img} className="othePosts__img" />
            <div className="othePosts__message">
                <p>{props.message}</p>
            </div>
            <div className="othePosts__likes likes">
                <img className="likes__img" src='https://i.pinimg.com/originals/63/3b/2e/633b2ea2a96ceaa39669a86dac0f3c01.jpg' />
                <div className="likes__count">
                    {props.likesCount}
                </div>
            </div>
        </div >
    );
}

export default OthePosts;