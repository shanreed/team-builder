import React from "react";
import { Link, useHistory } from "react-router-dom";

function MembersList(props) {


  const { push, goBack } = useHistory();
  const { members } = props; 
  console.log("This is:", props);



  return (

    <div className="members-list-wrapper">

      {/* <button onClick={() => goBack()}>Go Back</button> */}

            {members.map(member => (

                <div className="member-card" key={member.id}>

                <Link to={`/members-list/${member.id}/bio`}>
                    <img
                    className="member-list-image"
                    src={member.imageUrl}
                    alt={member.name}
                    />
                    <p>{member.name}</p>
                </Link>
                <p>{member.age}</p>
                </div>
      ))}
    </div>
  );
}

export default MembersList;
