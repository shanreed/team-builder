import React from "react";

function MemberSocial(props) {
  console.log("this is in itemshipping", props);
  return (
    <div>
      <p className="item-description">{props.member.social}</p>
    </div>
  );
}

export default MemberSocial;
