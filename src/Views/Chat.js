import ChatMessages from '../Components/ChatMessages';

function Chat() {
    return (
        <div>
            <div className="card-title mt-3 text-center">
                <h2>Tell us what's on your mind</h2>
            </div>
            <div>
                <ChatMessages />
            </div>
        </div>
    );
}

export default Chat;