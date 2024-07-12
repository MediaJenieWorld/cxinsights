import PostCard from "@/components/ui/dashboard/PostCard/PostCard";
import "./styles.scss";
import LikeDislikeFooter from "@/components/ui/dashboard/PostCard/LikeDislikeFooter";
import { getInsights } from "@/utils/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ErrorPage from "@/ErrorPage";

const MyInsightsPage = () => {
  const [insightsData, setInsightsArray] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMoreInsights();
  }, []);

  async function loadMoreInsights() {
    let skip = insightsData !== null ? insightsData.data.length : 0;
    const response = await getInsights(skip);
    const res = response.data;
    if (response.status === 200) {
      if (res.data.length == 0) {
        toast.error("No more insights to show");
      }
      if (insightsData !== null) {
        setInsightsArray({
          ...insightsData,
          data: [...insightsData.data, ...res.data],
        });
      } else {
        setInsightsArray(res);
      }
    } else {
      setError(res.data);
      toast.error(response?.data.data);
    }
  }

  if (error && insightsData == null) {
    return <ErrorPage message={error} />;
  }
  if (insightsData == null) {
    return <h1>Loading</h1>;
  }

  const filter_Options = [
    { label: "select filter", value: "" },
    { label: "Asian", value: "Asian" },
    { label: "American", value: "American" },
    { label: "European", value: "European" },
    { label: "Hispanic", value: "Hispanic" },
    { label: "Age Group 25-35", value: "25-35" },
    { label: "Age Group 35-55", value: "35-55" },
    { label: "Age Group 55-65", value: "55-65" },
  ]
  return (
    <div className="MyInsights">
      <div className="header">
        <div className="title">
          <h3>
            {" "}
            <span>SMART INSIGHTS TO</span>
            <br />
            Transform Your Business
          </h3>
        </div>
        <div className="flex">
          <img
            src={"/assets/dashboard/restaurant.png"}
            height={60}
            width={60}
            alt="restaurant"
          />
          <img
            src={"/assets/dashboard/cafe.png"}
            height={60}
            width={60}
            alt="cafe"
          />
        </div>
      </div>
      <div className="Info_and_Filter">
        <h3>
          Total  <i>
            <span>{insightsData.totalInsights} Insights</span>
          </i>
        </h3>
        <div className="filter_div">
          <select name="filter" id="filter">
            {
              filter_Options.map((opt) => {
                return <option key={opt.value} value={opt.value}>{opt.label}</option>
              })
            }
          </select>
        </div>
      </div>
      <div className="latestInsights">
        <div className="list">
          {insightsData?.data?.map((insight, i) => {
            return (
              <PostCard
                footer={<LikeDislikeFooter data={insight} />}
                key={i}
                data={insight}
              />
            );
          })}
          <div className="centered">
            {insightsData.totalInsights === insightsData.data.length ? (
              <button
                style={{
                  margin: 0,
                  width: "max-content",
                  padding: "10px 20px",
                }}
                className="start"
              >
                No more insights to show
              </button>
            ) : (
              <button
                onClick={loadMoreInsights}
                style={{
                  margin: 0,
                }}
                className="start"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInsightsPage;
