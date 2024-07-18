import { useEffect, useState } from "react";
import Custom_Centered_DynamicDialog from "@/components/ui/Dialog/Center_Dialog";
import { toast } from "react-toastify";
// eslint-disable-next-line react/prop-types
const Subscription = ({ setValue }) => {
  const [activeSubs, setActiveSubs] = useState("FREE TRIAL");

  useEffect(() => {
    setValue("subscription", "FREE TRIAL");
  }, [])

  const subscriptionPacks = [
    {
      name: "FREE TRIAL",
      price: "Free for 7 Days",
      description: "Access to basic insights",
      insightLimit: "10 insights per day",
    },
    {
      name: "BRONZE",
      price: "Rs. 250/Month",
      description: "Access to insights with basic features",
      insightLimit: "10 insights per day",
    },
    {
      name: "SILVER",
      price: "Rs. 600/Month",
      description: "Access to insights with advanced features",
      insightLimit: "20 insights per day",
    },
    {
      name: "GOLD",
      price: "Rs. 750/Month",
      description: "Access to premium insights with images",
      insightLimit: "30 insights per day",
    },
  ];


  function setSubs(sub) {
    return toast.info("Currently only FREE TRIAL pack is available")
    // setValue("subscription", sub.name);
    // setActiveSubs(sub.name);
  }

  return (
    <div className="Subscription">
      <label htmlFor="#">CHOOSE YOUR SUBSCRIPTION</label>{" "}
      <div className="Subscription__container">
        {subscriptionPacks.map((subs, i) => {
          return (
            <div
              onClick={() => setSubs(subs)}
              className={`item ${activeSubs === subs.name ? "active" : ""}`}
              key={i}
            >
              <div className="right">
                <h3>{subs.name}</h3>
                <p>{subs.price}</p>
                <Custom_Centered_DynamicDialog
                  label="info"
                  dialogStyles={{ width: "max-content" }}
                  boxStyles={{ backgroundColor: "rgb(91 90 90 / 80%)", borderRadius: "10px", padding: "1rem", width: "90%", justifyContent: "flex-start" }}
                  LabelChildren={() => <i className="pi pi-info-circle"></i>}
                >
                  <div className="dialog-content">
                    <div className="flex-column">
                      <h4>Subscription Pack Name:</h4>
                      <p style={{ color: "var(--star-color)" }}>{subs.name}</p>
                    </div>
                    <div className="flex-column">
                      <h4>What you can view:</h4>
                      <p style={{ color: "var(--star-color)" }}>{subs.description}</p>
                    </div>
                    <div className="flex-column">
                      <h4>Insight Limit:</h4>
                      <p style={{ color: "var(--star-color)" }}>{subs.insightLimit}</p>
                    </div>
                    <div className="flex-column">
                      <h4>Price:</h4>
                      <p style={{ color: "var(--star-color)" }}>{subs.price}</p>
                    </div>
                  </div>
                </Custom_Centered_DynamicDialog>
                {/* <i className="pi pi-info-circle"></i> */}
              </div>
              <div className="left">
                <i className="pi pi-check"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subscription;
