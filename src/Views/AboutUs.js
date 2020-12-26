import Contacts from "../Components/Contacts";
import ControlledTabs from "../Components/ControlledTabs";


function AboutUs() {
    return (
        <div>
            <ControlledTabs />
            <div className="container mt-3 text-left">
                <p>Contacts:</p>
            </div>
            <Contacts />
        </div>
    ); 
}

export default AboutUs;