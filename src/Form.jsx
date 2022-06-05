import React, { useState } from 'react'
import { Button } from 'bootstrap'
import { useNavigate } from "react-router-dom";

const Form = () => {
 const [firstname, setFirstname] = useState();
 const [lastname, setLastname] = useState();
 const [email, setEmail] = useState();
 const [address, setAddress] = useState();
 const history = useNavigate();
 const addStudent = () => {

  fetch("http://localhost:4001/addstudents", {

   // Adding method type
   method: "POST",

   // Adding body or contents to send
   body: JSON.stringify({
    firstname: firstname,
    lastname: lastname,
    email: email,
    address: address

   }),

   // Adding headers to the request
   headers: {
    "Content-type": "application/json; charset=UTF-8"
   }
  })
  history('/showstudents');

 }
 return (
  <div className='form'>
   <form action="" className='input'>
    <input type="text" onChange={(e) => setFirstname(e.target.value)} name="" id="" placeholder='firstname' />
    <input type="text" onChange={(e) => setLastname(e.target.value)} name="" id="" placeholder='lastname' />
    <input type="email" onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder='email' />
    <input type="text" onChange={(e) => setAddress(e.target.value)} name="" id="" placeholder='address' />
    <input className='btn' type="button" onClick={() => { addStudent() }} value="add" />
   </form>
  </div>
 )
}

export default Form