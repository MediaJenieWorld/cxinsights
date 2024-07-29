import "./styles.scss";

const headingText = "Big Heading Text";
const subHeadingText = "Subheading text line goes here.";
const descriptionText =
  "Small descriptive text in 3-4 lines can go here. They can be a single line or short paragraph too.";
const KnowMoreBtn = ({ link, lable = "KNOW MORE" }) => {
  return (
    <button>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
};

const Half_Card = ({ title, description, children }) => {
  title = title || headingText;
  description = description || descriptionText;
  children = children || <KnowMoreBtn />;
  return (
    <div className="half-card centered">
      <img loading="lazy"
        height={500}
        width={500}
        className="backImage"
        src="/assets/msg593987909-851.jpg"
        alt="rectangles"
      />
      <h3 className="F60px">{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};

const CardsPage = () => {
  return (
    <div className="Cards">
      {/* <ImageSlider /> */}
      <div id="mainPage" className="fullpage-card centered ">
        <img loading="lazy"
          className="backImage"
          src="/assets/Banner.png"
          alt="bannerImage"
        />
        <h1>{headingText}</h1>
        <h3>{subHeadingText}</h3>
        <p>{descriptionText}</p>
        <KnowMoreBtn />
      </div>
      <div id="section2" className="flex-container fullpage-card">
        <Half_Card />
        <Half_Card />
      </div>
      <div id="section3" className="flex-container fullpage-card">
        <div data-center="true" className="half-card  fullpage-card centered">
          <img loading="lazy"
            height={500}
            width={500}
            className="backImage"
            src="/img/rectangles.png"
            alt="rectangles"
          />
          <h1 data-text-align="center">
            FEATURED <br />
            SERVICE 01
          </h1>
          <div className="hide-content">
            <h3>
              FEATURED <br />
              SERVICE 01
            </h3>
            <p>{descriptionText}</p>
            <ul>
              <li>Like this </li>
              <li>Like this </li>
            </ul>
          </div>
        </div>
        <div data-center="true" className="half-card  fullpage-card centered">
          <img loading="lazy"
            height={500}
            width={500}
            className="backImage"
            src="@/assets/img/rectangles.png"
            alt="rectangles"
          />
          <h1 data-text-align="center">
            FEATURED <br />
            SERVICE 01
          </h1>
          <div className="hide-content">
            <h3>
              FEATURED <br />
              SERVICE 01
            </h3>
            <p>{descriptionText}</p>
            <ul>
              <li>Like this </li>
              <li>Like this </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="section4"
        data-column="three"
        className="flex-container fullpage-card"
      >
        <div className="card parent">
          <img loading="lazy"
            className="backImage"
            src="/assets/msg593987909-851.jpg"
            alt="rectangles"
            height={300}
            width={300}
          />
          <p className="tag">CATEGORY</p>
          <div className="bottom">
            <p className="F36px">
              Introduction line heading or value proposition goes here in 4
              lines.
            </p>
            <KnowMoreBtn />
          </div>
        </div>
        <div className="card parent">
          <img loading="lazy"
            className="backImage"
            src="/assets/msg593987909-835.jpg"
            alt="rectangles"
            height={300}
            width={300}
          />
          <p className="tag">CATEGORY</p>
          <div className="bottom">
            <p className="F36px">
              Introduction line heading or value proposition goes here in 4
              lines.
            </p>
            <KnowMoreBtn />
          </div>
        </div>
        <div className="card parent">
          <img loading="lazy"
            className="backImage"
            src="/assets/msg593987909-840.jpg"
            alt="rectangles"
            height={300}
            width={300}
          />
          <p className="tag">CATEGORY</p>
          <div className="bottom">
            <p className="F36px">
              Introduction line heading or value proposition goes here in 4
              lines.
            </p>
            <KnowMoreBtn />
          </div>
        </div>
      </div>
      <div id="section5" className="scroll-container ">
        <div className="scroll-card">
          <img
            className="backImage main-img "
            src="/img/bg12.png"
            alt="/bg12.png"
            height="300"
            width="300"
          />
          <img loading="lazy" className="icon" src="/search.png" alt="image" />
        </div>
        <div className="scroll-card">
          <img loading="lazy"
            className="backImage main-img "
            src="/img/bg122.png"
            alt="bg122.png"
            height="300"
            width="300"
          />
          <img loading="lazy" className="icon" src="/search.png" alt="image" />
        </div>
        <div className="scroll-card">
          <img loading="lazy"
            className="backImage main-img "
            src="/img/bg123.png"
            alt="bg123.png"
            height="300"
            width="300"
          />
          <img loading="lazy" className="icon" src="/search.png" alt="image" />
        </div>
        <div className="scroll-card">
          <img loading="lazy"
            className="backImage main-img "
            src="/img/bg124.png"
            alt="bg124.png"
            height="300"
            width="300"
          />
          <img loading="lazy" className="icon" src="/search.png" alt="image" />
        </div>
        <div className="scroll-card">
          <img loading="lazy"
            className="backImage main-img "
            src="/img/bg122.png"
            alt="bg122.png"
            height="300"
            width="300"
          />
          <img loading="lazy" className="icon" src="/search.png" alt="image" />
        </div>
      </div>
      <div id="section6" className="Big-container">
        <div className="left parent">
          <img loading="lazy"
            className="backImage"
            src="/img/samm.jpg"
            alt="bg-image"
            height="700"
            width="500"
          />
          <h1>Big Heading Text goes here</h1>
        </div>
        <div className="right">
          <div className="card">
            <p>
              Small descriptive text in 3-4 lines can go here. They can be a
              single line or short paragraph too. Small descriptive text in 3-4
              lines can go here. They can be a single line or short paragraph
              too. Small descriptive text in 3-4 lines can go here. They can be
              a single line or short paragraph too. Small descriptive text in
              3-4 lines can go here. They can be a single line or short
              paragraph too.
            </p>
            <KnowMoreBtn />
          </div>
        </div>
      </div>
      <div id="section7" className="Big-container2">
        <div className="small-width">
          <div className="left parent">
            <img loading="lazy"
              className="backImage"
              src="/img/Rectangle.png"
              alt="bg-image"
              height="700"
              width="500"
            />
            <h1>Big Heading Text goes here</h1>
          </div>
          <div className="right">
            <div className="card">
              <h1>{headingText}</h1>
              <p>
                Small descriptive text in 3-4 lines can go here. They can be a
                single line or short paragraph too. Small descriptive text in
                3-4 lines can go here. They can be a single line or short
                paragraph too. Small descriptive text in 3-4 lines can go here.
                They can be a single line or short paragraph too. Small
                descriptive text in 3-4 lines can go here. They can be a single
                line or short paragraph too.
              </p>
              <KnowMoreBtn />
            </div>
          </div>
        </div>
      </div>
      <div
        id="section8"
        data-bottom-text-card="true"
        className="flex-container"
      >
        <div className="half-card parent">
          <img loading="lazy"
            className=""
            src="/img/ShapeCard.png"
            alt="bg-image"
            height="700"
            width="500"
          />
          <div className="bottom">
            <h4>Name of the work or project goes here in 2 lines</h4>
          </div>
        </div>
        <div className="half-card parent">
          <img loading="lazy"
            className=""
            src="/img/ShapeCard.png"
            alt="bg-image"
            height="700"
            width="500"
          />
          <div className="bottom">
            <h4>Name of the work or project goes here in 2 lines</h4>
          </div>
        </div>
      </div>
      <div id="section9" className="image-gallery">
        <img loading="lazy"
          src="/assets/Banner.png"
          alt="bg-image"
          height="400"
          width="300"
        />
        <img
          loading="lazy"
          src="/assets/Banner.png"
          alt="bg-image"
          height="400"
          width="300"
        />
        <img
          loading="lazy"
          src="/assets/Banner.png"
          alt="bg-image"
          height="400"
          width="300"
        />
        <img
          loading="lazy"
          src="/assets/Banner.png"
          alt="bg-image"
          height="400"
          width="300"
        />
        <img
          loading="lazy"
          src="/assets/Banner.png"
          alt="bg-image"
          height="400"
          width="300"
        />
      </div>
      <div id="section10" className="usersList">
        <UserCard imgSrc={"/img/rectangle12.png"} />
        <UserCard imgSrc={"/img/rectangle9.png"} />
        <UserCard imgSrc={"/img/rectangle-10@2x.png"} />
        <UserCard imgSrc={"/img/rectangle6.png"} />
      </div>
      <div id="section11" className="testimonials">
        <TestimonialCard imgSrc={"/img/Rectangle.png"} />
        <TestimonialCard tag={"CASE STUDY"} imgSrc={"/img/rectangle1.png"} />
        <TestimonialCard tag={"FEATURED WORK"} imgSrc={"/img/rectangle7.png"} />
        <TestimonialCard tag={"HAND PICKED"} imgSrc={"/img/rectangle11.png"} />
      </div>
    </div>
  );
};

function UserCard({ imgSrc, name, tag }) {
  name = name || "Diksha";
  tag = tag || "Web Developer";
  return (
    <div className="userCard">
      <img loading="lazy" height={200} width={200} src={imgSrc} alt={name} />
      <div className="bottom">
        <h3>{name}</h3>
        <p>{tag}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ imgSrc, name, tag }) {
  name = name || "User Research & Insights";
  tag = tag || "SERVICE";
  return (
    <div className="card">
      <img loading="lazy" height={300} width={300} src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p style={{ fontWeight: "600" }}>{tag}</p>
    </div>
  );
}

export default CardsPage;
