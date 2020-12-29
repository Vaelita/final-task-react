import ChatMessages from './ChatMessages';
import useAxiosGet from '../Hooks/useAxiosGet';

function MessageAxios() {
    const messages = useAxiosGet('messages');
    
    let content = '';
    if (messages.loading) {
        content = <h4>Loading...</h4>
    } else if (messages.data.length === 0) {
        content = <h4 style={{color:'salmon'}}>No messages!</h4>
    } else {
        content = (
            <ul className="list-group">
                {messages.data.map((message) => <ChatMessages key={message._id} message={message} />)}
            </ul>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default MessageAxios;