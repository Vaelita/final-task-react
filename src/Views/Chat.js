import AddNewChatMessage from '../Components/AddNewChatMessage';
import MessagesChat from '../Components/MessagesChat';

function Chat() {
    return (
        <div>
            <div className="card-title mt-4 mb-3 text-center">
                <h2>Tell us what's on your mind</h2>
            </div>
            <div>
                <MessagesChat />
            </div>
            <div>
                <AddNewChatMessage />
            </div>
        </div>
    );
}

export default Chat;