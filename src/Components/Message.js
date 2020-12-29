import moment from 'moment';

function Message({message}) {

    let title = message.username;
    let text = message.text;
    let date = moment(message.createdAt).format('LLLL');
    
    return (
        <div className="mb-3">
            <div className="user-name">
                <strong>{title}</strong> {date}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}

export default Message;