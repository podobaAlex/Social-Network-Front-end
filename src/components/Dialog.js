import profile from "../static/img/profile.svg";
import pixel from "../static/img/1x1.png"
import {HandySvg} from "handy-svg";
import '../static/css/Dialog.css'

const Dialog = (id, dialogImg, dialogName) => {
    return (
        <div className="dialog" key={id}>
            <div className="dialog__image">
                <HandySvg src={profile} className="icon"/>
                <img data-src={dialogImg} src={pixel} alt=""/>
            </div>
            <div className="dialog__name">{dialogName}</div>
        </div>
    )
}

export default Dialog