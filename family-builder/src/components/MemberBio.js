import React from "react";

function MemberBio(props) {
  console.log(props.member.bio)
  return (
    <div>
      <p className="item-description">{props.member.bio}</p>
    </div>
  );
}

export default MemberBio;
