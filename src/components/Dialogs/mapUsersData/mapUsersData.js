import usersData from '../usersData/usersData';
import UserDialog from '../UserDialog/UserDialog';

let mapUsersData = usersData.map(user => {
    return <UserDialog key={user.img} name={user.name} img={user.img} message={user.message} />;
});

export default mapUsersData;