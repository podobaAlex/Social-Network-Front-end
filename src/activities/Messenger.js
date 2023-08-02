import '../static/css/Messenger.css'
import profile from '../static/img/profile.svg'
import {useEffect} from "react";

let dialogList;
let messenger;
let dialog;
let closeButton;
let wrapper;

function messengerListener() {
    dialogList = document.querySelector('.dialog__list')
    messenger = document.querySelector('.messenger__block')
    closeButton = document.querySelector('.button_close')
    wrapper = document.querySelector('.wrapper')

    if (closeButton) {
        closeButton.addEventListener('click', closeDialogue)
    }

    if (dialogList && messenger) {
        getDialogs()
        dialogList.addEventListener('click', showDialogue)
    }
}

function showDialogue(e) {
    if (dialog) {
        closeDialogue()
    }
    dialog = e.target.closest('.dialog')
    if (dialog) {
        openDialogue()
    }
}

function closeDialogue() {
    dialog.classList.remove('_active')
    wrapper.classList.remove('_active')
    messenger.innerHTML=''
    dialog = null;
}

function openDialogue() {
    console.log(dialog.dataset.id)
    wrapper.classList.add('_active')
    dialog.classList.add('_active')
    for (let i = 0; i < 15; i++) {
        messenger.innerHTML += `
            <div class="messenger__message" data-id="${i}">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa enim esse ipsum possimus quaerat tenetur? Doloribus hic iste minus nemo quod. Ab architecto debitis est eum in quos veniam.
            </div>
            `;
        messenger.innerHTML += `
            <div class="messenger__message _client" data-id="${i}">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur dolor illum itaque nobis! Architecto consequuntur culpa eaque eos eveniet fugit impedit iste porro tenetur ut. Beatae iusto officiis quidem.
            </div>
            `
    }
}

function getDialogs() {
    for (let i = 0; i < 15; i++) {
        dialogList.innerHTML += `
            <div class="dialog" data-id="${i}">
                <div class="dialog__image">
                    <img src="${profile}" alt="">
                </div>
                <div class="dialog__name">Dialog</div>
            </div>
            `
    }
}

const Messenger = () => {
    useEffect(messengerListener)

    return (<div className="wrapper">
        <div className="container container_messenger">
            <div className="dialogs">
                <div className="dialog__search" contentEditable="true"></div>
                <div className="dialog__list">

                </div>
            </div>
            <div className="messenger">
                <div className="messenger__name" hidden>
                    <button className="button button_close">X</button>
                    <span className="messenger__text">Text</span>
                </div>
                <div className="messenger__block" hidden></div>
                <div className="messenger__input" contentEditable="true" hidden></div>
            </div>
        </div>
    </div>)
}

export default Messenger