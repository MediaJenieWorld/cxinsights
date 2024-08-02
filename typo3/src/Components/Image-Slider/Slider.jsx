import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function arrowNext(a) {
  return (
    <button onClick={a} className="next-arrow" aria-labelledby="next btn" title="Next Arrow" aria-label={"next"}>
      <img loading="lazy" width={24} height={16} src="/icons/arrow-right.svg" alt="next-content" />
    </button>
  );
}

function arrowPre(a) {
  return (
    <button onClick={a} className="pre-arrow" aria-labelledby="next btn" title="Next Arrow" aria-label={"previous"}>
      <img loading="lazy" width={24} height={16} src="/icons/arrow-left.svg" alt="pre-content" />
    </button>
  );
}
const fakeImagesData = [
  "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

// eslint-disable-next-line react/prop-types
const ImageSlider = ({ data = fakeImagesData }) => {
  return (
    <Carousel
      renderArrowPrev={(a) => arrowPre(a)}
      renderArrowNext={(a) => arrowNext(a)}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
      renderIndicator={(clickHandler, isSelected, index) => <li onClick={clickHandler} key={index} className={`dot ${isSelected ? "selected" : ""}`} ></li>}
    >
      {data.map((imgSrc, index) => (
        <div key={index} className="Image-card">
          <img loading="lazy" src={imgSrc} alt={`Carousel Image - ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
