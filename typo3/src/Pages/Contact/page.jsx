import CoverPageImage from "@/Components/CoverPage"
import ContactForm from "./Form"
import Map from "./Map"
import "./styles.scss"
const ContactPage = () => {
    return (
        <div className="ContactPage">
            <CoverPageImage src={"/assets/Contact/cover.webp"} />
            <div className="section-1">
                <h4 className="text-32 text-600">Reach us </h4>
                <pre className="text-60 text-600">
                    {`Interested in our services? Reach out at`}
                </pre>
            </div>
            <div className="section-2">
                <h4 className="text-48 text-600">Corporate Office </h4>
                <div className="flex">
                    <div className="col-1">
                        <pre className="text-28">
                            {`3.5, Beginest Harbor 5,
Opp. Samsung Opera House,
Residency Road Cross,
Bangalore - 560 025
India`}
                        </pre>
                    </div>

                    <div className="col-2">
                        <p className="text-28"> <img loading="lazy" height={34} width={34} src="/assets/Contact/email-svgrepo-com 1.png" alt="email" />  support@mediajenie.com</p>
                        <p className="text-28"><img loading="lazy" height={34} width={34} src="/assets/Contact/phone-svgrepo-com 1.png" alt="phone" />  +91 98441 44802</p>
                    </div>

                </div>
            </div>
            <Map />
            <div className="section-4">
                <div className="col-1">
                    <h3 className="text-48 text-600">Mumbai</h3>
                    <pre className="text-28 text-500">
                        {`3.5, Beginest Harbor 5, 
Opp. Samsung Opera House, 
Residency Road Cross, 
Bangalore - 560 025
India`}</pre>
                </div>
                <div className="col-2">
                    <h3 className="text-48 text-600">London</h3>
                    <pre className="text-28 text-500">
                        {`3.5, Beginest Harbor 5, 
Opp. Samsung Opera House, 
Residency Road Cross, 
Bangalore - 560 025
India`}</pre>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}




export default ContactPage