import '../../../css/App.css';
import { NavLink } from 'react-router-dom';

const DialogsWithUsers = (props) => {

    return (
        <div className="usersDialogs">
            <div className="usersDialogs__user">
                <img src={props.img} alt='sm_ava' />
                <NavLink to={props.name} >
                    {props.name}
                </NavLink>
            </div>
            <div className="usersDialogs__messages messages">
                {props.message}
            </div>
        </div>
    );
}

export default DialogsWithUsers;