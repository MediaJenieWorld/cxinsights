import { useContext, useState } from "react";
import { UserContext } from "@/store/User_Context";
import { giveStarsHandler } from "@/utils/api";
import { toast } from "react-toastify";
const FeedbackFooter = ({ data }) => {
  const { auth } = useContext(UserContext);
  const isAlreadyReviewed = data.implements.find(
    (value) => value.author === auth._id
  );

  const [activeStars, updateActiveStars] = useState(
    isAlreadyReviewed?.stars || 0
  );
  const [count, setCount] = useState(0);

  const starsLength = 5;
  const starsUpdateHandler = async (e, index) => {
    e.stopPropagation();
    if (isAlreadyReviewed || count === 1)
      return toast.info("Already Reviewed!");
    const res = await giveStarsHandler({ id: data._id, stars: index });
    if (res.status === 200) {
      updateActiveStars(index);
      setCount(1);
      toast.success("Rated Successfully!!");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div style={{ gap: ".15rem" }} className="FeedbackStar">
      <div className="starsCollection">
        {Array.from({ length: starsLength }, (_id, index) => {
          return (
            <div
              onClick={(e) => starsUpdateHandler(e, index + 1)}
              key={index}
              className="icon-container"
            >
              <i
                className={
                  index + 1 <= activeStars
                    ? "pi pi-star-fill active"
                    : "pi pi-star"
                }
              ></i>
            </div>
          );
        })}
      </div>

      <div
        style={{ "--hoverColor": "var(--star-color)" }}
        className="icon-container"
      >
        <i className="pi pi-comment"></i>
      </div>
    </div>
  );
};

export default FeedbackFooter;
