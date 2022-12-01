import '../../../css/App.css'

const ProfileInfo = () => {
    return (
        <div className='profile'>
            <div className='profile__photo'>
                <img src="https://sun9-29.userapi.com/s/v1/if2/IruS_WEp0vD8iCg505ukmo4bGgGt0SvWl3ob3Uc4ms5Y3lWf6sRzR4ZbYtFoUABd5H87FxRwkPzVUAKII6YwllKv.jpg?size=853x1080&quality=96&type=album" alt="photo" />
            </div>
            <div className='profile__discription'>
                <p>Evgeny Chernov</p>
            </div>
        </div>
    );
}

export default ProfileInfo;