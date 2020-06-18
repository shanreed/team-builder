import React, { useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import data from "./data.js";


import Home from './components/Home';
import MembersList from './components/MembersList';
import Member from './components/Member';


import Form from './components/Form';
// import SearchMembersForm from './components/SearchMembers';
import './App.css';

function App() {
  const [membersState, setMembersState] = useState(data);
  
console.log(membersState[0].name)

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
  console.log()
  return (
    
    <div className="App">

      <header>
          <h1 className="header">Family</h1>
          <div className="nav-links">

          <Link to="/">Home</Link>
          <Link to="/members-list">Members</Link>
          <Link to="/addMember">ADD MEMBER</Link>
          <a href = "#">Sign Up</a>
          <a href = "#">Sign In</a>
          <a href = "#">About</a>
          </div>
      </header>
      <nav>
        

       
        <Switch>
              <Route exact path = "/" component = { Home } />

              <Route path="/members-list/:memberID">
                <Member members={membersState} />
              </Route>
              
              <Route 
                path="/members-list"
                render={props => {
                  return <MembersList members = { membersState } {...props} />;
                }}>
                <Form addNewMember = { addNewMember }/>
                <MembersList members = { membersState } />
               </Route>

          </Switch>

        
      </nav>

      <footer>
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
}

export default App;
