import '../static/css/Message.css'

const Message = (id, messageText, isClient) => {
    const classes = 'message' + (isClient ? ' _client' : '')

    return (
        <div key={id} className={classes}>
            {messageText}
        </div>
    )
}

export default Message