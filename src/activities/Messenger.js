import '../static/css/Messenger.css'
import profile from '../static/img/profile.svg'
import React, {useEffect} from 'react';
import Message from '../components/Message'

const Messenger = () => {
    useEffect(getDialogs, [])

    const [now, setNow] = React.useState(null);
    const messagesRef = React.useRef(null);

    let dialog = document.querySelector('.dialog._active')
    let dialogList = document.querySelector('.dialog__list')
    let wrapper = document.querySelector('.wrapper')

    let messageList = ''

    function openDialogue() {
        console.log(dialog.dataset.id)
        wrapper.classList.add('_active')
        dialog.classList.add('_active')
        let messageContainer = []
        for (let i = 0; i < 20; i++) {
            messageContainer.push(Message(i, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam atque, cumque, deleniti dignissimos eius error esse exercitationem facere illum in incidunt, ipsum iusto modi obcaecati officia quibusdam quo tenetur.`, (i % 2 === 0)))
        }
        messagesRef.current = setNow(messageContainer)
    }

    function getDialogs() {
        wrapper = document.querySelector('.wrapper')
        dialogList = document.querySelector('.dialog__list');
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

    const showDialogue = (e) => {
        if (e.target.closest('.dialog')) {
            if (dialog) {
                closeDialogue()
            }
            dialog = e.target.closest('.dialog')
            openDialogue()
        }
    }

    function closeDialogue() {
        dialog.classList.remove('_active')
        wrapper.classList.remove('_active')
        messagesRef.current = setNow('')
        dialog = null;
    }

    if (now != null) {
        messageList = now;
    }

    return (<div className="wrapper">
        <div className="container container_messenger">
            <div className="dialogs">
                <div className="dialog__search" contentEditable="true"></div>
                <div className="dialog__list" onClick={showDialogue}>

                </div>
            </div>
            <div className="messenger">
                <div className="messenger__name" hidden>
                    <button className="button button_close" onClick={closeDialogue}>X</button>
                    <span className="messenger__text">Text</span>
                </div>
                <div className="messenger__block" hidden>
                    {messageList}
                </div>
                <div className="messenger__input" contentEditable="true" hidden></div>
            </div>
        </div>
    </div>)
}

export default Messenger