import Image from "next/image";
import "./styles.scss";
import InsightsCard from "@/components/ui/dashboard/InsightsCard";
import PostCard from "@/components/ui/dashboard/PostCard/PostCard";
import Link from "next/link";
import MyTodoAndLikeCount from "@/components/ui/dashboard/UserLikeAndTodo/page";

import LikeDislikeFooter from "@/components/ui/dashboard/PostCard/LikeDislikeFooter";
import { getDashboard, getDashboardCounts } from "@/utils/api";
import ErrorPage from "../error/page";
import { cookiesKey } from '@/utils/temp_tokenKey'
import { authenticationClientMiddleware } from '@/utils/token'
import { cookies } from 'next/headers';

const DashboardPage = async () => {
  const cookieStore = cookies()
  const tokenValue = cookieStore.get(cookiesKey)?.value
 const auth = authenticationClientMiddleware(tokenValue)
if(!auth){
    return <h1>Protected Route</h1>
}
  const response = await getDashboard();
  const userResponse = await getDashboardCounts();
  const res = response.data;
  const userRes = userResponse.data;
  if (res.success === false) {
    return <ErrorPage error={{ message: res.data }} />;
  }
  const allInsightsCount = [
    "Marketing",
    "Behaviour",
    "Price",
    "Complaint",
    "Sales",
  ];

  return (
    <div className="Dashboard">
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
          <Image
            src={"/assets/dashboard/restaurant.png"}
            height={60}
            width={60}
            alt="restaurant"
          />
          <Image
            src={"/assets/dashboard/cafe.png"}
            height={60}
            width={60}
            alt="cafe"
          />
        </div>
      </div>
      <div className="Insights">
        {/* {allInsightsCount.map((label, i) => {
          return <InsightsCard key={i} insightNumber={res?.counts[label] || 0} label={label} />
        })} */}
        {/* USE THIS WHEN TO SHOW ONLY AVAILABLE INSIGHTS CATEGORY */}
        {Object.keys(res.counts).map((key, index) => (
          <InsightsCard
            key={index}
            insightNumber={res.counts[key]}
            label={key}
          />
        ))}
      </div>
      <MyTodoAndLikeCount data={userRes} />
      <div className="latestInsights">
        <p className="latestInsights_title">LATEST INSIGHTS</p>
        <div className="list">
          {res?.data?.map((insight, i) => {
            return (
              <PostCard
                key={i}
                data={insight}
                footer={<LikeDislikeFooter data={insight} />}
              />
            );
          })}
          <div className="centered">
            <button
              style={{
                margin: 0,
              }}
              className="start"
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                href="/dashboard/my_insights"
              >
                Load More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
