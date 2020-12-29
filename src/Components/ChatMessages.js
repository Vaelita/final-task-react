import { useState } from 'react';
import AxiosPost from '../Requests/AxiosPost';

function ChatMessages() {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const [messages, setMessages] = useState([]);

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleMessageChange = (event) => setMessage(event.target.value);


    const addNewMessage = async () => {
        const newMessage = {
            username: username,
            message: message,
            createdAt: new Date(),
        };
        // console.log(createdAt)

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setMessage('');

        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (username === '') {
            errorsForForm.push('Please enter your username');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return ;
        }

        await AxiosPost('chat', {
            username,
            message,
        });
        setLoading(false);
        setUsername('');
        setMessage('');
    };

    const saveButtonText = loading ? 'Loading...' : 'Send';
    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div className="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    const messagesElements = messages.map((message) => {
        return (
            <div>
                <strong className="form-group">{message.username} {message.createdAt}</strong>
                <br />
                <p>{message.message}</p>
            </div>
        );
    })

    return (
        <div className="container mt-4 mb-5">
            {errorsElement}
            <div>
                <div>
                    <div className="col border chat-border">
                        <div>
                            {messagesElements}
                        </div>
                    </div>
                    
                </div>


                <div htmlFor="user-title" className="form-group mt-3">
                    <label htmlFor="user">Username</label>
                    <div className="">
                        <input value={username} onChange={handleUsernameChange} disabled={loading} type="text" className="form-control" id="user"></input>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="chat-message">Message</label>
                    <div className="row">
                        <div className="col-10">
                            <textarea value={message} onChange={handleMessageChange} disabled={loading} id="chat-message" className="form-control"></textarea>
                        </div>
                        <div className="col-2">
                            <button onClick={addNewMessage} disabled={loading} className="btn btn-success">{saveButtonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatMessages;