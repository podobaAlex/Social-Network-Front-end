import profile from "../static/img/profile.svg";
import "../static/css/Main.css"
import {HandySvg} from "handy-svg";
import pixel from "../static/img/1x1.png"

const Main = () => {
    return (
        <div className="wrapper">
            <div className="container container_main _client">
                <div className="profile">
                    <div className="profile__image">
                        <HandySvg src={profile} className="icon"/>
                        <img src={pixel} alt=""/>
                    </div>
                    <div className="profile__description">
                        <div className="profile__username">Username: <span className="username">Name</span></div>
                        <time className="profile__birthday">Birthday: <span className="birthday">13.04.2002</span></time>
                        <div className="profile__friend-counter">Friends: <span className="friend-counter">10</span> </div>
                    </div>
                </div>
                <div className="comments">
                    <span className="comments__placeholder">Тут пока пусто :(</span>
                </div>
            </div>
        </div>
    )
}

export default Main