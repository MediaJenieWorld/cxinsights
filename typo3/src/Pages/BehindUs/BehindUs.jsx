
import TestimonialsSlider from "@/Components/Testomonials/Slider";
import "./style.scss"
import CoverPageImage from "@/Components/CoverPage";

const BehindUs = () => {
  const story = `People behind.
Young, crazy, old & wild.`
  return (
    <div className='BehindUs'>
      <CoverPageImage src={"/assets/Home/Behind-Hero.png"} />
      <div className="section-2">
        <pre style={{ fontFamily: 'Poppins', lineHeight: "1.2em" }} className="text-84 text-600">
          {story}
        </pre>
        <p className="text-28">
          Description text paragraph can go here in 200 words. This can be multi-line text. Description text paragraph can go here in 200 words. This can be multi-line text.
        </p>
      </div>
      <div className="usersList">
        <UserCard imgSrc={"/assets/BehindUs/Rectangle 8 (1).jpg"} />
        <UserCard imgSrc={"/assets/BehindUs/Rectangle 9.jpg"} />
        <UserCard imgSrc={"/assets/BehindUs/Rectangle 10.jpg"} />
        <UserCard imgSrc={"/assets/BehindUs/Rectangle 11.jpg"} />

        <UserCard imgSrc={"/assets/BehindUs/image 2.png"} />
        <UserCard imgSrc={"/assets/BehindUs/Mask group.jpg"} />
        <UserCard imgSrc={"/assets/BehindUs/Mask group (1).jpg"} />
        <UserCard imgSrc={"/assets/BehindUs/Rectangle 15.png"} />

        <UserCard imgSrc={"/assets/BehindUs/Mask group.png"} />
        <UserCard imgSrc={"/assets/BehindUs/Mask group (2).jpg"} />
        <UserCard imgSrc={"/assets/BehindUs/image 6.png"} />
        <UserCard imgSrc={"/assets/BehindUs/Mask group (3).jpg"} />
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