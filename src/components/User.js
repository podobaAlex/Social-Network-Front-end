import profile from "../static/img/profile.svg";
import addFriend from "../static/img/add-friend.svg";
import messenger from "../static/img/messenger.svg";
import pixel from "../static/img/1x1.png"
import {HandySvg} from "handy-svg";
import "../static/css/User.css"

const User = (id, userImage, username) => (
    <div className="user" data-id={id}>
        <div className="user__info">
            <div className="user__image">
                <HandySvg src={profile} className="icon"/>
                <img data-src={userImage} src={pixel} alt=""/>
            </div>
            <div className="user__name">{username}</div>
        </div>
        <div className="user__action">
            <button className="user__button user__button_add">
                <HandySvg src={addFriend} className="icon"/>
            </button>
            <button className="user__button user__button_message">
                <HandySvg src={messenger} className="icon"/>
            </button>
        </div>
    </div>
)

export default User