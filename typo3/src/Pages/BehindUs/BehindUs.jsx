
import TestimonialsSlider from "@/Components/Testomonials/Testimonial_Slider";
import "./style.scss"
import CoverPageImage from "@/Components/CoverPage";

const BehindUs = () => {
  const story = `People behind.
Young, crazy, old & wild.`
  return (
    <div className='BehindUs'>
      <CoverPageImage src={"/assets/Home/Behind-Hero.webp"} />
      <div className="section-2">
        <pre style={{ fontFamily: 'Poppins', lineHeight: "1.2em" }} className="text-84 text-600">
          {story}
        </pre>
        <p className="text-28">
          Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text.
        </p>
      </div>
      <div className="usersList">
        {Array.from({ length: 12 }, (val, i) => <UserCard key={i} imgSrc={`/assets/BehindUs/mask (${i + 1}).webp`} />)}
      </div>
      <div className="testimonials">
        <h3 className="text-32 text-700 text-container">Testimonial</h3>
        <TestimonialsSlider />
      </div>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function UserCard({ imgSrc, name, tag }) {
  name = name || "Name";
  tag = tag || "Designation";

  return (
    <div className="userCard">
      <img loading="lazy" loading="lazy" height={200} width={200} src={imgSrc} alt={name} />
      <div className="bottom">
        <h3>{name}</h3>
        <p>{tag}</p>
      </div>
    </div>
  );
}


export default BehindUs