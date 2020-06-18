import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  console.log(props);
  const history = useHistory();
  console.log(history);
  const routeToMembers = event => {
    history.push("/members-list");
  };

  return (
    <div className="home-wrapper">
      <button className="home-member-button" onClick={routeToMembers}>
        See All Members!
      </button>
    </div>
  );
}

export default Home;
