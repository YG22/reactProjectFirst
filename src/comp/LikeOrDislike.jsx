import React from "react";
import ToneIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownTwoToneIcon from "@material-ui/icons/ThumbDownOutlined";

function LikeOrDislike() {
  function clickLike() {
    alert("Thank you! \n You are the best.");
  }
  function clickDisLike() {
    alert("Whattt! \n Are you serious?");
  }

  return (
    <div className="ans">
      <p>You loved the app?</p>
      <div className="ToneIcon">
        <ThumbDownTwoToneIcon onClick={clickDisLike} className="dislike" />
        <ToneIcon onClick={clickLike} className="like" />
      </div>
    </div>
  );
}

export default LikeOrDislike;
