/* eslint-disable react/prop-types */
import CoverPageImage from "@/Components/CoverPage";
import "./style.scss";

const WorkPage = () => {
  const images = [
    "/assets/Work/man.png",
    "/assets/msg593987909-845.jpg",
    "/assets/Work/image-2.png",
    "/assets/Work/image-3.png",
    "/assets/Work/image-4.png",
  ];
  const images2 = [
    "/assets/Work/Rectangle 31.png",
    "/assets/Work/Rectangle 32.png",
    "/assets/Work/2149709933 1.png",
    "/assets/Work/Rectangle 35.png",
    "/assets/Work/Rectangle 34.png",
  ];

  const cards = [
    "/assets/blue-particle.jpg",
    "/assets/msg593987909-835.jpg",
    "/assets/msg593987909-840.jpg",
    // "/assets/blue-particle.jpg",
  ]

  const KnowMoreBtn = ({ btnClass = "", link, lable = "KNOW MORE" }) => {
    return (
      <button className={btnClass + " button"}>
        <a href={link || "#link"}>{lable}</a>
      </button>
    );
  };

  return (
    <div className="Work">
      <CoverPageImage src={"/assets/Work/cover.png"} />
      <div className="section-1">
        <h4 className="text-32 text-600">Our Work</h4>
        <pre className="text-60 text-600">
          {`Digital Media Production
Vaishnavi Estate Coffee`}
        </pre>
      </div>
      <div className="image-gallery">
        {images.map((val, i) => {
          return (
            <img loading="lazy"
              src={val}
              height="400"
              width="300"
              alt="img"
              key={i}
            />
          )
        })}
      </div>
      <div className="section-3">
        <div className="text-center-wrapper">
          <h2 className="text-72 text-600">Services we handled</h2>
          <p className="text-28">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
          </p>
        </div>
      </div>
      <div className="image-gallery">
        {images2.map((val, i) => {
          return (
            <img loading="lazy"
              src={val}
              height="400"
              width="300"
              alt="img"
              key={i}
            />
          );
        })}
      </div>
      <div className="section-1">
        <h4 className="text-32 text-600">Related Projects</h4>
        <pre className="text-60 text-600">
          {`You may be interested in....`}
        </pre>
      </div>
      <div className="cards-section">
        {cards.map((val, i) => {
          return (<div key={i} className="card">
            <img loading="lazy"
              src={val}
              alt={val}
              height={400}
              width={400}
            />
            <div className="text-container">
              <p className="text-24 text-600">CATEGORY</p>
              <div className="bottom">
                <p className="text-36 text-600">
                  Introduction line heading or value proposition goes here in 4
                  lines.
                </p>
                <KnowMoreBtn />
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
};



export default WorkPage;
