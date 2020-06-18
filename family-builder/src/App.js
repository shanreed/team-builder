import React, { useState } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import data from "./data.js";

import MembersList from './components/MembersList';
import Home from './components/Home';
import Form from './components/Form';
import './App.css';

function App() {
  const [membersState, setMembersState] = useState(data);
  console.log(membersState)


  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      age: member.age,
      bio: member.bio,
      social: member.social
    }
    setMembersState([
      ...membersState,
      newMember
    ])
  }

  return (
    <div className="App">
      <nav>
        <h1 className="header">Family</h1>

        <div className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/members-list">Members</Link>
          <Link to="/addMember">ADD MEMBER</Link>

          {/* <Switch> */}
              <Route path = "/" component = { Home } />

              <Route path = "/members-list">
                <MembersList members = { membersState } />
              </Route>
              <Route path = "/addMember">
                <Form addNewMember = { addNewMember }/>
                <MembersList members = { membersState } />
              </Route>

          {/* </Switch> */}

        </div>
      </nav>
    </div>
  );
}

export default App;
