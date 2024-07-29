import TestimonialSlider from "@/Components/Testomonials/Slider";
import "./style.scss";

const headingText = `Bringing Your
Brand & Customers Closer
`;
const subHeadingText = "Full Service CX Agency";
const descriptionText = "Grow sales, retention, loyalty and your brand through experiences.";

const story = `We are a customer-experience
agency from Bangalore, India.`
// eslint-disable-next-line react/prop-types
const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
  return (
    <button className={btnClass + " button"}>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
};
const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <img loading="lazy" src="/assets/Home/Home-Hero-Image.png" alt="Banner" />
        <div className="overlay">
          <pre className="text-84 text-700">{headingText}</pre>
          <h3 className="text-48 text-500">{subHeadingText}</h3>
          <h4 className="text-32 text-500">{descriptionText}</h4>
          <KnowMoreBtn />
        </div>
      </div>
      <div className="home-section-2">
        <h4 className="text-32 text-600">Introduction</h4>
        <pre className="text-60 text-600">{story}
        </pre>
        <KnowMoreBtn btnClass="purple" lable="View Services" />
      </div>
      <div className="cards-section">
        <div className="card">
          <img loading="lazy"
            src="/assets/blue-particle.jpg"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">FEATURED SERVICE</p>
            <div className="bottom">
              <p className="text-36 text-600">
                Customer Experience Consulting to improve Sales
              </p>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
        <div className="card">
          <img loading="lazy"
            src="/assets/red-rays.jpg"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">LATEST WORK</p>
            <div className="bottom">
              <p className="text-36 text-600">
                Digital Experience for one of the leading organization in USA
              </p>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
        <div className="card">
          <img loading="lazy"
            src="/assets/blue-ball.jpg"
            alt="blue.jpg"
            height={400}
            width={400}
          />
          <div className="text-container">
            <p className="text-24 text-600">KNOWLEDGE</p>
            <div className="bottom">
              <p className="text-36 text-600">
                How you can use AI to improve customer experience?
              </p>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <h3 className="text-32 text-700 text-container">What our customers say?</h3>
        <TestimonialSlider />
      </div>
      <div id="section6" className="Big-container">
        <div className="left parent">
          <img loading="lazy"
            className="backImage"
            src="/assets/Home/Card-Over@2x.png"
            alt="bg-image"
            height="700"
            width="500"
          />
          {/* <h1>Big Heading Text goes here</h1> */}
        </div>
        <div className="right">
          <div className="card">
            <div className="all">
              <div className="text-wrapper">
                <h2 className="text-60 text-700">Why CX is critical?</h2>
                <p className="text-32 text-400">
                  Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too. Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.
                </p>
              </div>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
