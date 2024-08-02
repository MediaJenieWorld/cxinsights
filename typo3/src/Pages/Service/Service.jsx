import TestimonialsSlider from "@/Components/Testomonials/Testimonial_Slider";
import "./style.scss";
import CoverPageImage from "@/Components/CoverPage";

const fakeDes =
  "Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text.";
const fakeImgSrc = "/assets/sofa-4.jpg";

const fakeData = [
  {
    heading: "Consulting",
    description: fakeDes,
    imgSrc: "/assets/Service/image-10.webp",
    link: "no-link",
  },
  {
    heading: "Design",
    description: fakeDes,
    imgSrc: "/assets/Service/image-9.webp",
    link: "no-link",
  },
  {
    heading: "Digital",
    description: fakeDes,
    imgSrc: "/assets/Service/image-11.webp",
    link: "no-link",
  },
];

const story = `Our Capabilities.
Our Services`

const storyDes = `Description text paragraph can go here in 200 words. This can be multi-line text. Description text
paragraph can go here in 200 words. This can be multi-line text. `

const ServicePage = () => {
  return (
    <div className="Service">
      <CoverPageImage src={"/assets/Service/service-hero.webp"} />
      <div className="section-1">
        <pre className="text-84 text-600">{story}
        </pre>
        <pre className="text-28">
          {storyDes}
        </pre>
      </div>
      <div className="section-2">
        <img loading="lazy" src="/assets/Service/main-hero.webp" alt="Banner" />
      </div>
      <div className="section-3">
        <h4 className="text-32 text-600">What we do?</h4>
        <pre className="text-60 text-600">
          {`Our services are spread across
5 areas & practices`}
        </pre>
      </div>
      <div className="section-4">
        {fakeData.map((val, i) => {
          return (
            <div className="card" key={i}>
              <ServiceProductCard data={val} />
            </div>
          );
        })}
      </div>
      <div className="testimonials">
        <h3 style={{ color: "var(--purple)" }} className="text-32 text-700 text-container">Testimonial</h3>
        <TestimonialsSlider />
      </div>
    </div>
  );
};

function ServiceProductCard({ data }) {
  const {
    heading = "Service heading",
    description = "description",
    link = "link",
    imgSrc = "imgSrc",
  } = data;

  return (
    <>
      <div className="left">
        <img loading="lazy"
          height={360}
          width={360}
          src={imgSrc || fakeImgSrc}
          alt={heading + " image"}
        />
      </div>
      <div className="right">
        <div className="top">
          <h3 className="text-60 text-600">{heading}</h3>
          <p className="text-400 text-28">{description || fakeDes}</p>
        </div>
        <KnowMoreBtn btnClass="purple" lable="View Services" />
      </div>
    </>
  );
}




function KnowMoreBtn({ btnClass = "", link, lable = "KNOW MORE" }) {
  return (
    <button className={btnClass + " button"}>
      <a href={link || "#link"}>{lable}</a>
    </button>
  );
}
export default ServicePage;
