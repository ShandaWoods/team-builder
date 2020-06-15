import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import './styles.css';

const Form= ()=> {
const [teammate, addTeammate] = useState ({
    name: '',
    email: '',
    role: '',
});

const [team, addToTeam] = useState([])

const handleChange = event => {
    addTeammate({ ...teammate, [event.target.name]: event.target.value });

};

  const handleSubmit = event => {
    event.preventDefault();
    let newArr = [...team, teammate]
    addToTeam(newArr);
  };


    return (
      <div className="form">
        <form onSubmit={event => handleSubmit(event)}>
            <label>Name: 
                <input
                    id='name'
                    type='text'
                    name='name'
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>Email: 
                <input
                    id='email'
                    type='text'
                    name='email'
                    onChange={event => handleChange(event)}                
                />
            </label>
            <label>Role: 
                <input
                    id='role'
                    type='text'
                    name='role'
                    onChange={event => handleChange(event)}                
                />
            </label>
            <button>Submit! </button>
        </form>
        {
            team.length > 0 ? 
            <div className ='team-list'>
               {team && team.map( teamMember => {
                   return (
                       <ul>
                        <li>{teamMember.name}</li>
                        <li>{teamMember.role}</li>
                        <li>{teamMember.email}</li>
                       </ul>
                   )
               })}
        </div>
        :
        <div>add your teammates</div>
        }
        
</div>
    );
  }

  export default Form;
  
  