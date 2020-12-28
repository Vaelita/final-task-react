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

const image1 = readpic;
const image2 = bathrelax;
const image3 = meditate;
const image4 = settle;
const image5 = space;
const image6 = greens;

const images = [image1, image2, image3, image4, image5, image6];


function LightBox() {
  return (
    <div>
      <div>
        <img className="main-image" src={kitty} alt="kitty cat" />
      </div>

      <div className="mt-3">
        <ImageGallery />
      </div>
    </div>
  );
}



function ImageGallery() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const imageCards = images.map((image) => (
    <div className="col p-1">
      <img className="image-card" onClick={() => showImage(image)} src={image} alt="" />
    </div>
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

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
      <div className="row ">{imageCards}</div>

      {
        lightboxDisplay ?
          <div id="lightbox" onClick={hideLightBox}>
            <button onClick={showPrev}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <img id="lightbox-img" src={imageToShow} alt=""></img>
            <button onClick={showNext}><FontAwesomeIcon icon={faAngleRight} /></button>
          </div>
          : ""
      }
    </>
  );
}

export default LightBox;
