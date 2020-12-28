import { UserForm } from "../Components/UserForm";

function Registration() {
    return (
        <div>
        <div className="card-title mt-3 text-center">
            <h2>Register to receive mindful information every week</h2>
        </div>
        <div className="col-6">
            <UserForm />
        </div>
        </div>
    ); 
}

export default Registration;