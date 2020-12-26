import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import hometab from '../Assets/Images/hometab-med.jpg';
import profiletab from '../Assets/Images/profiletab-med.jpg';
import contacttab from '../Assets/Images/contacttab-med.jpg';
import socialtab from '../Assets/Images/socialtab-med.png';

function ControlledTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      className="bg-green mt-5"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="home" title="Who are we">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className="row">
            <div className="col-3">
              <img src={hometab} alt="who we are" />
            </div>
            <div className="col-9">
              <p className="card-text text-left">This page is designed to help you find the
              balance with this new found situation of working from home,
              yet still maintaining mental clarity, stress-free atmosphere,
                            and to manage your work space from your home comfort better.</p>
              <p className="card-text text-left">Feel free to let us know if there is anything we can help you with.</p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div className="tab-pane fade show " id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className="row">
            <div className="col-3">
              <img src={profiletab} alt="who we are" />
            </div>
            <div className="col-9">
              <p className="card-text text-left">Our goal is to introduce you and help you practice some of the relaxation techniques.</p>
              <p className="card-text text-left">Also, to remind you that it is okay to take time for yourself after a longer or shorter
                            work day, and feel free to experiment with combinations that work for you!</p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <div className="tab-pane fade show" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <div className="row">
            <div className="col-3">
              <img src={contacttab} alt="who we are" />
            </div>
            <div className="col-9">
              <p className="card-text text-left">Contact us by writing to our e-mail below, our online chat where we will try to answer
                            you as soon as possible, and by calling us.</p>
            </div>
          </div>
        </div>
      </Tab>
      <Tab eventKey="social" title="Social">
        <div className="tab-pane fade show" id="social" role="tabpanel" aria-labelledby="social-tab">
          <div className="row">
            <div className="col-3">
              <img src={socialtab} alt="who we are" />
            </div>
            <div className="col-9">
              <p class="card-text text-left">You can also find us on <Link className="card-title" to="https://www.fb.com/">Facebook</Link>,
                            <Link className="card-title" to="https://twitter.com/">Twitter</Link> and <Link className="card-title" to="https://www.tumblr.com">
                  Tumblr</Link>, where we post daily relaxation tips and techniques on organizing your home space.</p>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;