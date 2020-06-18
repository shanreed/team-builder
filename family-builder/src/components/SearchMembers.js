// import React, { useState, useEffect } from "react";

// function SearchMembers(props) {

//   const { members } = props; 
//   console.log("This is in searchMembers:", props);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState({members});

//   // useEffect(() => {
//   //   const newResults = name.filter(name => {
//   //     return name.toLowerCase().includes(searchTerm.toLowerCase());
//   //   });

//   //   setSearchResults(newResults);
//   // }, [searchTerm]);


//   const handleChange = e => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="App">
//       <form>
//         <label htmlFor="name">Search:</label>
//         <input
//           id="name"
//           type="text"
//           name="textfield"
//           placeholder="Search"
//           value={searchTerm}
//           onChange={handleChange}
//         />
//       </form>
//       <div className="member-list">
//         <ul>
//           {/* {searchResults.map(member => {
//             return <li key={ member }>{ member }</li>;
//           })} */}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SearchMembers;





import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";
import Form from "./Form";
// We create a mock list/array named Characters, from which
// display the list in our component.
const characters = [
  "Harry Potter",
  "Luna Lovegood",
  "Neville Longbottom",
  "Hermione Granger",
  "Ron Weasley",
  "Ginny Weasley",
  "Fred Weasley",
  "George Weasley",
  "Albus Dumbledore ",
  "Aberforth Dumbledore ",
  "Dudley Dursley ",
  "Petunia Dursley ",
  "Vernon Dursley",
  "Cornelius Fudge",
  "Rubeus Hagrid ",
  "Viktor Krum ",
  "Bellatrix Lestrange",
  "Narcissa Malfoy",
  "Draco Malfoy"
];

function SearchMembersForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  
  useEffect(() => {
    const newResults = characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(newResults);
  }, [searchTerm]);


  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => {
            return <li key={character}>{character}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchMembersForm;