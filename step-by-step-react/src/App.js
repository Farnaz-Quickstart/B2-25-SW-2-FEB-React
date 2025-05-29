import './App.css';
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header'
import Footer from './component/Footer'
import ListStudents from './component/ListStudents'
import FormSingleState from './component/FormSingleState'


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
    <>
      <Header />
      <FormSingleState students={students} setStudents={setStudents} />
      <ListStudents students={students} />
      <Footer />  
    </>
  );
}

export default App;
