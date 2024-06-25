import PostCard from "@/components/ui/dashboard/PostCard/PostCard";
// import Link from "next/link";
import "./styles.scss";
import TodoPostFooter from "@/components/ui/dashboard/PostCard/TodoFooter";
import { getActionsList, getDashboard } from "@/utils/api";

const ActionsPage = async () => {
  const req = await getActionsList();
  const actions = req.data;
  return (
    <div className="MyInsights">
      <div className="header">
        <div className="title">
          <h3>
            {" "}
            <span>MY LIST</span>
            <br />
            Ideas to Implement
          </h3>
        </div>
      </div>
      <div className="latestInsights">
        <div className="list">
          {actions.data.length > 0 ? (
            actions.data.map((insight, index) => (
              <PostCard key={index} footer={<TodoPostFooter />} />
            ))
          ) : (
            <p>You haven't saved anything yet</p>
          )}

          {/* <div className="centered">
            <button style={{
              margin: 0
            }} className='start'>
              <Link style={{ textDecoration: "none", color: "inherit" }} href="/dashboard/my_insights">
                Load More
              </Link>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ActionsPage;
