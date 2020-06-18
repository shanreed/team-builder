import React from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import MemberSocial from "./MemberSocial";
import MemberBio from "./MemberBio";

import './member.css';

function Member(props) {
  const params = useParams();
  console.log(props)


  const { path, url } = useRouteMatch();

  const theMember = props.members.find(member => member.id === Number(params.memberID));
  return (
    <div className="member-wrapper">
      <div className="member-header">
        <div className="image-wrapper">
          <img src={theMember.imageUrl} alt={theMember.name} />
        </div>
        <div className="member-title-wrapper">
          <h2>{theMember.name}</h2>
          <h4>{theMember.age} years old</h4>
        </div>
      </div>
      <nav className="member-sub-nav">
      <NavLink to={`${url}/bio`}>Bio</NavLink>
        <NavLink to={`/members-list/${theMember.id}/social`}>Social Meadia</NavLink>
      </nav>
      
      <Route path={`/members-list/:memberID/social`}>
        <MemberSocial member={theMember} />
      </Route>

      <Route path={`${path}/bio`}>
        <MemberBio member={ theMember} />
      </Route>
    </div>
  );
}
export default Member;
