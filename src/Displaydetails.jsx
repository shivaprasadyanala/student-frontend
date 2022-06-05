import React, { useEffect, useState } from 'react'
import './style.css'
const Displaydetails = () => {
  const [data, setData] = useState([]);

  const setLocalData = (data) => {
    localStorage.setItem('id', data._id)
    localStorage.setItem('firstname', data.firstname)
    localStorage.setItem('lastname', data.lastname)
    localStorage.setItem('email', data.email)
    localStorage.setItem('address', data.address)
  }

  useEffect(() => {
    fetch("http://localhost:4001/getstudents")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }, [data])
  return (
    <div>
      <div className='students'>
        {data.map((d) => {
          return (
            <div key={d._id} className='student'>
              <p>{d.firstname}</p>
              <p>{d.lastname}</p>
              <p>{d.email}</p>
              <p>{d.address}</p>
              <button className='dis-btn' onClick={() => setLocalData(d)}> <a href="/updatestudents">update</a> </button>
            </div>)
        })}
      </div>
    </div>
  )
}

export default Displaydetails