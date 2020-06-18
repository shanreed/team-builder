
import React, {useState} from "react";
import '../components/form.css';
function Form({ addNewMember }) {
  const [member, setMember] = useState({
    name:'',
    age:'',
    bio:'',
    social: '',
  })

  const onFormDataChange = e => {
    // debugger
    if (/^[a-zA-Z0-9]+$/.test(e.target.value)) {
      setMember({
        ...member,
        [e.target.name]: e.target.value,
      })
    }
    
  }

  const handleSubmit = e => {
    e.preventDefault();
    addNewMember(member)
    setMember({
        name:'',
        age:'',
        bio:'',
        social: '',
     }); 
    alert(`submitting ${member.name}, ${member.age}, ${member.bio}, ${member.social}`)
  }
  return (
    <div className="form">
      <form onSubmit = {handleSubmit }>

        <label htmlFor = "name">
          Name:
          <input 
          id = "name"
          name = "name" 
          type="text"
          value = { member.name }
          placeholder = "Enter name"
          onChange = {onFormDataChange} />
        </label>

        <label htmlFor = "age">
          Age:
          <input
           id = "age"
           name = "age"
           type="text" 
           value = {member.age} 
           placeholder = "Enter age"
           onChange = {onFormDataChange}/>
        </label>

        <label htmlFor = "bio">
          Bio:
          <textarea
           id = "bio"
           name = "bio"
           type="text" 
           value = {member.bio}
           placeholder = "Enter something about yourself"
           onChange = {onFormDataChange} />
        </label>

        <label htmlFor = "social">
          Add Your Social Media Links?
          <input
           id = "social"
           name = "social"
           type="text" 
           value = {member.social}
           placeholder = "Yes or No"
           onChange = {onFormDataChange} />
        </label>

        <button type = "submit" >Add Member</button>
      </form>
    </div>
  );
}

export default Form;