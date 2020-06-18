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
      {/* <button className="md-button shop-button" onClick={routeToMembers}>
        Shop now!
      </button> */}
    </div>
  );
}

export default Home;
