import './App.css';
import Displaydetails from './Displaydetails';
import Form from './Form'
import Update from './Update'

import { Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>student details</h1>
      <div className='navs'>
        <Link className='nav' to="showstudents">show students</Link>
        <Link className='nav' to="addstudents">add students </Link>
      </div>
      <Routes>
        <Route path="/showstudents" element={<Displaydetails />} />
        <Route path="/addstudents" element={<Form />} />
        <Route path="/updatestudents" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
