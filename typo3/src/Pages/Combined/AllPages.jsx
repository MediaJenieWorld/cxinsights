import About from "../About/About"
import BehindUs from "../BehindUs/BehindUs"
import ContactPage from "../Contact/page"
import Home from "../Home/Home"
import DetailsPage from "../Service/Details/Details"
import ServicePage from "../Service/Service"

const AllPages = () => {
  return (
    <>
      <Home />
      <About />
      <BehindUs />
      <ServicePage />
      <DetailsPage />
      <ContactPage />
    </>
  )
}

export default AllPages