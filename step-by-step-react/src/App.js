import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import ContactPage from './component/Pages/ContactPage'
import HomePage from './component/Pages/HomePage'


function App() {
  const productList = ["Laptop", "Phone"];
  const [students, setStudents] = useState([{
   firstName: 'Robert',
   lastName: 'Tylor',
   email: 'farnaz.towhidi@quickstart.com',
   image: 'robert.jpg',
   tel:'999-999-9999',
   comments: 'Looking forward to learning more!'
 }, {
   firstName: 'Joshua',
   lastName: 'Pierson',
   email: 'Josh@quickstart.com',
   image: 'joshua.jpg',
   tel:'999-999-9999',
   comments: 'Looking forward to learning more!'
 },
{
   firstName: 'Allie',
   lastName: 'Efferson',
   email: 'Alli@quickstart.com',
   image: 'joshua.jpg',
   tel:'999-999-9999',
   comments: 'Looking forward to learning more!'
 }]);


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
