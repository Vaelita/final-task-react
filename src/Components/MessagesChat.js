import Message from './Message';
import useAxiosGet from '../Hooks/useAxiosGet';

function MessagesChat() {
    const messages = useAxiosGet('chat');
    console.log(messages)

    let content = '';

    if (messages.loading) {
        content = <h4>Loading...</h4>
    } else if (messages.data.length === 0) {
        content = <h4>No messages</h4>
    } else {
        content = (
            <div className="form-group">
                {messages.data.map((message) => <Message key={message._id} message={message} />)}
            </div>
        );
    }

    return (
        <div className="col border chat-border">
            {content}
        </div>
    );
}

export default MessagesChat;