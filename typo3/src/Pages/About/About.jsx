import "./style.scss";
import CoverPageImage from "@/Components/CoverPage";

const headingText = `Thinkers, artists, analysts, 
strategists, coders, producers, rebels, 
experts & more...`
const subHeadingText = "Passionate, honest, creative, hardworking.";
const descriptionText = "";
const story = `Our story.
Who we are & what we do?`

const floatingCard_Heading = `Our
Work Culture`

const About = () => {
  return (
    <div className="About">
      <CoverPageImage src="/assets/Home/Our Story.webp" />
      <div className="section-2">
        <pre style={{ fontFamily: 'Poppins', lineHeight: "1.2em" }} className="text-84 text-600">
          {story}
        </pre>
        <p className="text-28">
          MediaJenie is a 16Year old full-service agency with a focus on Customer Experience. We brng your customers and brand closer through great customer experiences. Started by 2 entrepreneuers as a digital media agency, we have grown into a full service agency what is a hybrid of consultancy, design, production, technology, digital and managed services.
        </p>
      </div>
      {/* <div className="image-section">
        <ImageSlider />
      </div> */}
      <div className="hero-section">
        <img loading="lazy" src="/assets/Home/About-Hero.webp" alt="Banner" />
        <div className="overlay">
          <h1 className="text-84 text-700">{headingText}</h1>
          <h3 className="text-48 text-400">{subHeadingText}</h3>
          <h4 className="text-32 text-400">{descriptionText}</h4>
        </div>
      </div>
      <div className="section-4">
        <div className="text-center-wrapper">
          <h2 className="text-72 text-600">Our Principles & Values</h2>
          <p className="text-28">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
          </p>
        </div>
      </div>
      <div id="section5" className="Big-container">
        <img loading="lazy"
          className="main-backImage"
          src="/assets/Home/About-half-card.webp"
          alt="bg-image"
          height="700"
          width="500"
        />
        <div className="left parent">
          <img loading="lazy"
            className="backImage"
            src="/assets/Home/About-half-card.webp"

            alt="bg-image"
            height="700"
            width="500"
          />
          <pre style={{ color: "#fff" }} className="text-72 text-700">{floatingCard_Heading}</pre>
        </div>
        <div className="right">
          <div className="card">
            <div className="text-wrapper">
              <p className="text-32 text-400">
                Small descriptive text in 3-4 lines can go here. They can be a
                single line or short paragraph too. Small descriptive text in
                3-4 lines can go here. They can be a single line or short
                paragraph too. Small descriptive text in 3-4 lines can go here.
                They can be a single line or short paragraph too. Small
                descriptive text in 3-4 lines can go here. They can be a single
                line or short paragraph too.
              </p>
              <button className="button">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
