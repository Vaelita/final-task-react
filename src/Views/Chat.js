import { useState } from 'react';

function Chat() {
    const [tasks, setTasks] = useState([
        'Welcome to chat'
    ]);
    const [newTaskName, setNewTaskName] = useState('');
    const addTask = () => {
        const newTasks = [...tasks, newTaskName]
        setTasks(newTasks);
        setNewTaskName('');
    }

    const listElements = tasks.map((task, index) => {
        return <p key={index}>{task}</p>
        });

    // const [messages, setMessages] = useState();

    // // ..

    // const addMessages = () => {
    //     const newMessages = [...messages, {
    //         title: 'title',
    //         user: 'user',
    //     }];
    // }

    return (
        <div className="container mt-4 mb-5">
            <div className="col border border-dark">
                <div>
                    <div className="chat-container">
                        <div className="border-dark center text-left">
                            {listElements}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="chat-form border-top border-dark">
                        <div className="form-group mr-3 ml-3 text-left">
                            <label for="username">Username</label>
                            <div>
                                <input value={newTaskName} onChange={(event) => {setNewTaskName(event.target.value)}} type="text" class="form-control col-3" id="username" />
                            </div>
                        </div>
                        <div className="form-group mr-3 ml-3 text-left">
                            <label for="message">Message</label>
                            <div class="row">
                                <div class="col-8">
                                    <textarea class="form-control" id="message"></textarea>
                                </div>
                                <div>
                                    <button className="btn btn-success" onClick={addTask}>Add task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default Chat;