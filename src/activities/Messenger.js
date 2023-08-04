import '../static/css/Messenger.css'
import React, {useEffect} from 'react';
import Dialog from '../components/Dialog'
import Message from '../components/Message'
import InputMessage from '../components/InputMessage'

const Messenger = () => {
    useEffect(getDialogs, [])

    const [dialogNow, setDialogNow] = React.useState(null);
    const dialogRef = React.useRef(null);

    const [messageNow, setMessageNow] = React.useState(null);
    const messagesRef = React.useRef(null);

    let dialog = document.querySelector('.dialog._active')
    let dialogs = document.querySelector('.dialog__list')
    let wrapper = document.querySelector('.wrapper')

    let messageList = ''
    let dialogList = ''

    function openDialogue() {
        console.log(dialog.dataset.id)
        wrapper.classList.add('_active')
        dialog.classList.add('_active')
        let messageContainer = []
        for (let i = 0; i < 20; i++) {
            messageContainer.push(Message(i, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam atque, cumque, deleniti dignissimos eius error esse exercitationem facere illum in incidunt, ipsum iusto modi obcaecati officia quibusdam quo tenetur.`, (i % 2 === 0)))
        }
        messagesRef.current = setMessageNow(messageContainer)
    }

    function getDialogs() {
        wrapper = document.querySelector('.wrapper')
        dialogs = document.querySelector('.dialog__list');

        let dialogContainer = []

        for (let i = 0; i < 15; i++) {
            dialogContainer.push(Dialog(i, '', 'Dialog'))
        }
        dialogRef.current = setDialogNow(dialogContainer)
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
        messagesRef.current = setMessageNow('')
        dialog = null;
    }

    if (messageNow != null) {
        messageList = messageNow;
    }

    if (dialogNow != null) {
        dialogList = dialogNow;
    }

    const sendMessage = () => {
        console.log('Sending message');
    }

    return (<div className="wrapper">
        <div className="container container_messenger">
            <div className="dialogs">
                <div className="dialog__search" contentEditable="true"></div>
                <div className="dialog__list" onClick={showDialogue}>{dialogList}</div>
            </div>
            <div className="messenger">
                <div className="messenger__name" hidden>
                    <button className="button button_close" onClick={closeDialogue}>X</button>
                    <span className="messenger__text">Text</span>
                </div>
                <div className="messenger__block" hidden>{messageList}</div>
                <InputMessage onClick={sendMessage}/>
            </div>
        </div>
    </div>)
}

export default Messenger