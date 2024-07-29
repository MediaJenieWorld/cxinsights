import { useState } from "react"

const icons = [
    {
        imgUrl: "/assets/Contact/Group.png",
        label: "Consulting"
    },
    {
        imgUrl: "/assets/Contact/Icon.png",
        label: "Media"
    },
    {
        imgUrl: "/assets/Contact/_x34_.png",
        label: "Production"
    },
    {
        imgUrl: "/assets/Contact/Group (1).png",
        label: "Design"
    },
    {
        imgUrl: "/assets/Contact/Group 17.png",
        label: "Digital"
    }
]


const ContactForm = () => {

    const [category, setCategory] = useState([])

    const interestHandler = (label) => {
        let type = category.includes(label) ? "pull" : "push"
        console.log("type", type);
        if (type === "push") {
            setCategory(pre => {
                const x = [...pre];
                x.push(label);
                return x;
            });
        } else {
            setCategory(pre => {
                const x = [...pre];
                const filteredArray = x.filter(val => val !== label);
                return filteredArray;
            });
        }
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} className='Form'>
            <h2 className='text-42 text-600'>Drop a line and we will get in touch with you.</h2>
            <div className="fields">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email Address" />
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Organization" />
                <input type="text" placeholder="Designation" />
            </div>
            <h2 className='text-42 text-600'>Interested in....</h2>
            <div className="flex-icons">
                {icons.map((icon, i) => {
                    return <div
                        onClick={() => interestHandler(icon.label)}
                        key={i} className={`item ${category.includes(icon.label) ? "active" : ""}`}>
                        <img loading="lazy" className="icon" height={80} width={120} src={icon.imgUrl} alt={icon.label} />
                        <p className="text-28 text-400">{icon.label}</p>
                        <svg className="check" width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.7682 6.64018C14.1218 6.21591 14.0645 5.58534 13.6402 5.23178C13.2159 4.87821 12.5853 4.93554 12.2318 5.35982L7.9328 10.5186L5.70711 8.29289C5.31658 7.90237 4.68342 7.90237 4.29289 8.29289C3.90237 8.68342 3.90237 9.31658 4.29289 9.70711L7.29289 12.7071L8.0672 13.4814L8.76822 12.6402L13.7682 6.64018Z" fill="#018235" />
                        </svg>
                    </div>
                })}
            </div>

            <textarea name="" id="" placeholder="Your Message"></textarea>
            <div className="submit">
                <button className="button">Submit</button>
            </div>
        </form>
    )
}

export default ContactForm