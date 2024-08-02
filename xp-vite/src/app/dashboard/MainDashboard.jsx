import "./styles.scss";

const MainDashboard = () => {
    return (
        <div className="Main_Dashboard">
            <a href="/dashboard/Zensight" className="box">
                <Arrow />
                Zensight
            </a>
            <a className="box" href="/dashboard/Clueberry">
                <Arrow />
                Clueberry
            </a>
            {/* <a className="box" href="/dashboard/Surveys"> */}
            <a className="box" href="#id">
                <Arrow /> Surveys
            </a>
            {/* <a className="box" href="/dashboard/Reputation_management"> */}
            <a className="box" href="#id">
                <LongArrow /> Reputation management{" "}
            </a>
            {/* <a className="box" href="/dashboard/Chatbot"> */}
            <a className="box" href="#id">
                <Arrow />
                Chatbot
            </a>
        </div>
    );
};

function Arrow() {
    return (
        <svg
            width="21"
            height="10"
            viewBox="0 0 21 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 5L20.3536 4.64645L20.7071 5L20.3536 5.35355L20 5ZM1 5.5C0.723858 5.5 0.5 5.27614 0.5 5C0.5 4.72386 0.723858 4.5 1 4.5V5.5ZM16.3536 0.646447L20.3536 4.64645L19.6464 5.35355L15.6464 1.35355L16.3536 0.646447ZM20.3536 5.35355L16.3536 9.35355L15.6464 8.64645L19.6464 4.64645L20.3536 5.35355ZM20 5.5H10.5V4.5H20V5.5ZM10.5 5.5H1V4.5H10.5V5.5Z"
                fill="#fff"
            />
        </svg>
    );
}
function LongArrow() {
    return (
        <svg
            width="35"
            height="10"
            viewBox="3 0 35 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M34 5L34.3536 4.64645L34.7071 5L34.3536 5.35355L34 5ZM1 5.5C0.723858 5.5 0.5 5.27614 0.5 5C0.5 4.72386 0.723858 4.5 1 4.5V5.5ZM30.3536 0.646447L34.3536 4.64645L33.6464 5.35355L29.6464 1.35355L30.3536 0.646447ZM34.3536 5.35355L30.3536 9.35355L29.6464 8.64645L33.6464 4.64645L34.3536 5.35355ZM34 5.5H24.5V4.5H34V5.5ZM24.5 5.5H12.75V4.5H24.5V5.5ZM12.75 5.5H1V4.5H12.75V5.5Z"
                fill="#fff"
            />
        </svg>
    );
}

export default MainDashboard;
