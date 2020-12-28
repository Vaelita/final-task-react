import { useState } from 'react';
import '../Assets/CSS/lightBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import meditate from '../Assets/Images/meditate.jpg';
import kitty from "../Assets/Images/kittymain.jpg";
import readpic from "../Assets/Images/readpic.jpg";
import bathrelax from "../Assets/Images/bathrelax.jpg";
import settle from "../Assets/Images/settle.jpg";
import space from "../Assets/Images/space.jpg";
import greens from "../Assets/Images/greens.jpg";

//IMAGES
//you can also import a local file, the syntax would look like:
//import image1 from './images/imagename.jpg'
const image1 = readpic;
const image2 = bathrelax;
const image3 = meditate;
const image4 = settle;
const image5 = space;
const image6 = greens;


//IMAGE ARRAY
const images = [image1, image2, image3, image4, image5, image6];


//MAIN APP COMPONENT
function LightBox() {
  return (
    <div>
      <div>
      <img className="" style={{width: "30"}} alt="" src={kitty} />
    </div>

    <div>
      <ImageGallery />
    </div>
    </div>
  );
}


//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  
  //looping through our images array to create img elements
 const imageCards = images.map((image) => (
    <div className="col p-0">
      <img className="image-card" onClick={() => showImage(image)} src={image} alt="" />
    </div>
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  };
  

  return (
    <>
      <div className="row">{imageCards}</div>
      
      {
        lightboxDisplay ? 
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}><FontAwesomeIcon icon={faAngleLeft}/></button>
          <img id="lightbox-img" src={imageToShow} alt=""></img>
          <button onClick={showNext}><FontAwesomeIcon icon={faAngleRight}/></button>
        </div>
       : ""
      }
    </>
  );
}

export default LightBox;
