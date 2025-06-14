import './Slider.css';
import TB1 from '../../assets/TB1.png';
import TB2 from '../../assets/TB2.png';
import TB3 from '../../assets/TB3.png';
import TB4 from '../../assets/TB4.png';
import BT1 from '../../assets/BT1.png';
import BT2 from '../../assets/BT2.png';
import BT3 from '../../assets/BT3.png';
import BT4 from '../../assets/BT4.png';

export default function Slider() {
  const imagesCol1 = [TB1, TB2, TB3, TB4];
  const imagesCol2 = [BT1, BT2, BT3, BT4];
  const allImages = [...imagesCol1, ...imagesCol2];
  return (
    <>
      <div className="scroller-container">
        <div className="column top-to-bottom">
          <div className="scrolling-track">
            {imagesCol1.map((src, idx) => (
              <img className="img1" key={`col1-first-${idx}`} src={src} alt={`col1-img-${idx}`} />
            ))}
            {imagesCol1.map((src, idx) => (
              <img className="img1" key={`col1-second-${idx}`} src={src} alt={`col1-img-duplicate-${idx}`} />
            ))}
          </div>
        </div>
       
        <div className="column bottom-to-top">
          <div className="scrolling-track">
            {imagesCol2.map((src, idx) => (
              <img className="img1" key={`col2-first-${idx}`} src={src} alt={`col2-img-${idx}`} />
            ))}
            {imagesCol2.map((src, idx) => (
              <img className="img1" key={`col2-second-${idx}`} src={src} alt={`col2-img-duplicate-${idx}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-scroller">
        <div className="mobile-scrolling-track">
          {allImages.map((src, idx) => (
            <img className="mobile-img" key={`mobile-first-${idx}`} src={src} alt={`mobile-img-${idx}`} />
          ))}
          {allImages.map((src, idx) => (
            <img className="mobile-img" key={`mobile-second-${idx}`} src={src} alt={`mobile-img-duplicate-${idx}`} />
          ))}
        </div>
      </div>
    </>
  );
}