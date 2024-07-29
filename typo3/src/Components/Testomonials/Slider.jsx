import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function arrowNext(a) {
  return (
    <button onClick={a} className="next-arrow">
      <img loading="lazy" width={24} height={16} src="/icons/arrow-right.svg" />
    </button>
  );
}

function arrowPre(a) {
  return (
    <button onClick={a} className="pre-arrow">
      <img loading="lazy" width={24} height={16} src="/icons/arrow-left.svg" />
    </button>
  );
}
const fakeTestimonials = [
  {
    heading:
      "Great work! Love the way these guys approach a problem and come up with a solution.",
    summary:
      "Detailed testimonial content goes here, in multiple lines. Detailed testimonial content goes here, in multiple lines.",
    author: "Steve Jobs",
    position: "CEO - Apple",
  },
  {
    heading:
      "Amazing service! They exceeded all my expectations and delivered top-notch results.",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Elon Musk",
    position: "CEO - SpaceX",
  },
  {
    heading:
      "Highly recommend! Their professionalism and expertise are unmatched.",
    summary:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    author: "Mark Zuckerberg",
    position: "CEO - Meta",
  },
  {
    heading:
      "Exceptional team! They are dedicated, creative, and always deliver on time.",
    summary:
      "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    author: "Tim Cook",
    position: "CEO - Apple Inc.",
  },
];

const TestimonialsSlider = ({ data = fakeTestimonials }) => {
  return (
    <Carousel
      renderArrowPrev={(a) => arrowPre(a)}
      renderArrowNext={(a) => arrowNext(a)}
      infiniteLoop={true}
      showArrows={true}
      showThumbs={false}
    >
      {data.map((testimonial, index) => (
        <div key={index} className="test-card">
          <h3 className="text-42 text-600">{testimonial.heading}</h3>
          <p className="text-28">{testimonial.summary}</p>
          <div className="author">
            <h5 className="text-28 text-600">{testimonial.author}</h5>
            <p className="text-10">{testimonial.position}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialsSlider;
