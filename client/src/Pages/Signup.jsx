import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import "./Signup.css";
import axios from "axios";


const Signup = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[toggleSignup, setToggleSignup] = useState(true);
  const navigate = useNavigate();

  const toggleForm =()=>{
    setToggleSignup(!toggleSignup);
  }

  const handleClick =async()=>{
    try{
    const response = await axios.post("http://localhost:3000/api/v1/auth/signup",{
      firstname,
      lastname,
      email,
      password
    });
    console.log(response.data);
  }catch(error){
    console.log("error signin up : ", error)
  }
  }

  const handleSignin=async()=>{
    try{
      const response =await axios.post("http://localhost:3000/api/v1/auth/signin",{
        email,
        password
      }); 
    
      console.log(response.data);

    }catch(error){
      console.log("error signin in : ", error);
    }
  }

  return (
    <div className='signup-page'>
    <h2>{toggleSignup?"Sign Up" : "Sign In"}</h2>
    <p>Enter your deatils below</p>
      <div className='signup-form'>
        
        {toggleSignup &&(<input type='name' 
          placeholder='first name' 
          value={firstname}
          onChange={e => {
          setFirstname(e.target.value)}} />
        )}
        {toggleSignup &&(<input type='name ' 
          placeholder='last name' 
          value={lastname}
          onChange={(e) => {
          setLastname(e.target.value);
        }}/>
        )}
        <input type='email' 
          placeholder='email'
          value={email}
          onChange={e => {
          setEmail(e.target.value);
        }}/>
        <input type='password' 
          placeholder='password' 
          value={password}
          onChange={(e) => {
          setPassword(e.target.value)
        }}/>
       { toggleSignup && ( 
        <button onClick={handleClick}
           > Signup </button>
         ) }

         { !toggleSignup &&( <button  onClick={handleSignin} > Signin </button>
         ) }
           <div className='toggle-msg'>{toggleSignup ?"User already registered? " : "New here? "} <div className='toggle-btn' onClick={toggleForm}>{toggleSignup ? "Sign In" : "Sign Up"}</div></div>  
      </div>
    </div>
  )
}

export default Signup