import React, { useState, useEffect } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
const Update = () => {
 const [id, setId] = useState();
 const [firstname, setFirstname] = useState();
 const [lastname, setLastname] = useState();
 const [email, setEmail] = useState();
 const [address, setAddress] = useState();
 const history = useNavigate();



 useEffect(() => {
  setId(localStorage.getItem('id'));
  setFirstname(localStorage.getItem('firstname'));
  setLastname(localStorage.getItem('lastname'));
  setEmail(localStorage.getItem('email'));
  setAddress(localStorage.getItem('address'));
 }, [])


 const updateStudent = () => {
  fetch(`http://localhost:4001/updatestudents/${id}`, {

   // Adding method type
   method: "PUT",

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
    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} name="" id="" placeholder='firstname' />
    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="" id="" placeholder='lastname' />
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder='email' />
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="" id="" placeholder='address' />
    <input className='btn' type="button" onClick={() => { updateStudent() }} value="update" />
   </form>
  </div>

 )
}

export default Update