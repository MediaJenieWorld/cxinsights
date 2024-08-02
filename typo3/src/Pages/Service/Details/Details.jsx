import CoverPageImage from "@/Components/CoverPage";
import "./style.scss";

const fakeCardData = [
  {
    category: "SERVICE",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/msg593987909-835.webp",
  },
  {
    category: "CASE STUDY",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/msg593987909-836.webp",
  },
  {
    category: "FEATURED WORK",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/owl.webp",
  },
  {
    category: "HAND PICKED",
    label: "User Research & Insights",
    imgSrc: "/assets/Service/woman.webp",
  },
];


const DetailsPage = () => {
  return (
    <div className="Details">
      <CoverPageImage src={"/assets/Service/cover.png"} />
      <div className="section-1">
        <pre className="text-84 text-600">
          {`What we do?`}
        </pre>
        <pre className="text-28">
          {`Strategic Consulting & Research`}
        </pre>
      </div>
      <div className="cards-section">
        {fakeCardData.map((card, i) => {
          return (
            <div className="card" key={i}>
              <img loading="lazy"
                src={card.imgSrc}
                alt={card.imgSrc}
                height={450}
                width={350}
              />
              <div className="text-container">
                <p className="text-24 text-600">{card.category}</p>
                <div className="bottom">
                  <p className="text-36 text-600">{card.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="section-3">
        <div className="text-center-wrapper">
          <h2 className="text-72 text-600">User Focused. Insight Driven.</h2>
          <p className="text-28">
            Description text paragraph can go here in 200 words. This can be
            multi-line text. Description text paragraph can go here in 200
            words. This can be multi-line text. Description text paragraph can
            go here in 200 words. This can be multi-line text. Description text
            paragraph can go here in 200 words. This can be multi-line text.
          </p>
        </div>
      </div>
      <div id="section-4" className="Big-container">
        <div className="left parent">
          <img loading="lazy"
            className="backImage"
            src="/assets/Service/float-card.webp"
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
                <h2 className="text-60 text-700">Applied Psychology</h2>
                <p className="text-32 text-400">
                  Small descriptive text in 3-4 lines can go here. They can be a
                  single line or short paragraph too. Small descriptive text in
                  3-4 lines can go here. They can be a single line or short
                  paragraph too. Small descriptive text in 3-4 lines can go
                  here. They can be a single line or short paragraph too. Small
                  descriptive text in 3-4 lines can go here. They can be a
                  single line or short paragraph too.
                </p>
              </div>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="FAQ">
        <h2 className="text-72 text-600">Frequently Asked Questions</h2>
        {Array.from({ length: 4 }).map((qA, i) => {
          return (
            <details key={i}>
              <summary className="text-32 text-500">
                What is the difference between a website and a web application?
              </summary>
              <div className="content">
                <div className="text-28 text-300">
                  A website is a collection of web pages that are connected to
                  each other and are accessible
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
};

function KnowMoreBtn({ btnClass = "", link, lable = "KNOW MORE" }) {
  return (
    <button className={btnClass + " button"}>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
};


export default DetailsPage;
