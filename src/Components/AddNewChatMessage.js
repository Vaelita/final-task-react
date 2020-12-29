import { useState } from 'react';
import AxiosPost from '../Requests/AxiosPost';

function AddNewChatMessage() {
    
    const [username, setUsername] = useState('');
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handleTextChange = (event) => setText(event.target.value);

    const addNewMessage = async () => {
        setLoading(true);
        setErrors([]);
        let errorsForForm = [];
        if (username === '') {
            errorsForForm.push('Please set your username');
        }

        if (errorsForForm.length > 0) {
            setErrors(errorsForForm);
            setLoading(false);
            return ;
        }

        await AxiosPost('chat', {
            username,
            text
        });
        setLoading(false);
        setText('');
    };

    const saveButtonText = loading ? 'Loading...' : 'Send';
    let errorsElement = '';
    if (errors.length > 0) {
        errorsElement = (
            <div classUsername="alert alert-danger">
                <ul>
                    {errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul>
            </div>
        );
    }

    return (
        <div>
            {errorsElement}
            <div className="form-group">
                <label htmlFor="new-username">Username</label>
                <input value={username} onChange={handleUsernameChange} disabled={loading} type="text" className="form-control" id="new-username"></input>
            </div>
            <div className="form-group">
                <label htmlFor="new-task-text">Message</label>
                <textarea value={text} onChange={handleTextChange} disabled={loading} id="new-task-text" className="form-control"></textarea>
            </div>
            <div className="form-group">
                <button onClick={addNewMessage} disabled={loading} className="btn btn-success">{saveButtonText}</button>
            </div>
        </div>
    );
}

export default AddNewChatMessage;