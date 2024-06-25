"use client";
import { bookmarksHandler, dislikeHandler, likeHandler } from "@/utils/api";

const Page = () => {
  const clickMe = async () => {
    const req = await likeHandler("6678182791afe888cc983717");
    console.log("Request ", req);
  };
  const dislike = async () => {
    const req = await dislikeHandler("6678182791afe888cc983717");
    console.log("Request ", req);
  };

  const clickBook = async () => {
    const req = await bookmarksHandler("6678182791afe888cc983717");
    console.log("Request ", req);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Test Page</h1>
      <button onClick={clickMe}>Like</button>
      <br />
      <button onClick={dislike}>Dislike</button>
      <br />
      <button onClick={clickBook}>Bookmark</button>
    </div>
  );
};

export default Page;
