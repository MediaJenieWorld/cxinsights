"use client";
import { UserContext } from "@/store/UserContext";
import { useContext, useState } from "react";
import { bookmarksHandler, dislikeHandler, likeHandler } from "@/utils/api";
const LikeDislikeFooter = ({ data }) => {
  const { auth } = useContext(UserContext);
  console.log("data", data);
  const isLiked = data.likes.includes(auth?._id);
  const isDisliked = data.dislikes.includes(auth?._id);
  const isMarked = data.bookmarks.includes(auth?._id);

  const [liked, setLiked] = useState(isLiked);
  const [disliked, setDisliked] = useState(isDisliked);
  const [bookmarked, setBookmarked] = useState(isMarked);

  const handleLike = async() => {
    if(isDisliked) {
      return 
    }
    const guest = await likeHandler(data._id);
    setLiked(!liked);
    setDisliked(false);
  };

  const handleDislike = async() => {
    if(isLiked) {
      return 
    }
    const guest = await dislikeHandler(data._id);
    setDisliked(!disliked);
    setLiked(false);
  };

  const handleBookmark = async() => {

    // if(isMarked) {
    //   return 
    // }
    const guest = await bookmarksHandler(data._id);
    setBookmarked(!bookmarked);
  };

  return (
    <div className="Like_Dislike_footer">
      <div
        style={{ "--hoverColor": "var(--star-color)" }}
        className={`icon-container ${liked ? "active" : ""}`}
        onClick={handleLike}
      >
        {liked ? (
          <i className="pi pi-thumbs-up-fill"></i>
        ) : (
          <i className="pi pi-thumbs-up"></i>
        )}
      </div>
      <div
        style={{ "--hoverColor": "red" }}
        className={`icon-container ${disliked ? "active" : ""}`}
        onClick={handleDislike}
      >
        {disliked ? (
          <i className="pi pi-thumbs-down-fill"></i>
        ) : (
          <i className="pi pi-thumbs-down"></i>
        )}
      </div>
      <div
        style={{ "--hoverColor": "var(--star-color)" }}
        className={`icon-container ${bookmarked ? "active" : ""}`}
        onClick={handleBookmark}
      >
        {bookmarked ? (
          <i className="pi pi-bookmark-fill"></i>
        ) : (
          <i className="pi pi-bookmark"></i>
        )}
      </div>
    </div>
  );
};

export default LikeDislikeFooter;
