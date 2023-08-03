import '../static/css/InputMessage.css'
import React from "react";
import {HandySvg} from "handy-svg";
import send from "../static/img/send.svg"
import emoticons from "../static/img/emoticons.svg"

const InputMessage = () => {
    return (
        <div className="input-message" hidden>
            <div className="input-message__button input-message__button_emoticons">
                <HandySvg src={emoticons} className="icon"/>
            </div>
            <div className="input-message__button input-message__button_send">
                <HandySvg src={send} className="icon"/>
            </div>
            <div className="input-message__input" contentEditable="true"></div>
        </div>
    )
}

export default InputMessage