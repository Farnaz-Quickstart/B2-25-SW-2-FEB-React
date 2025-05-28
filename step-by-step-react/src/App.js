import './App.css';
import React, {useState} from 'react'
import PropsWithoutDes from './component/PropsWithoutDes';
import PropsWithDes from './component/PropsWithDes';
import FormMultiState from './component/FormMultiState';
import FormSingleState from './component/archive/FormSingleState';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer'
import Registration from './component/Registration';
import ListStudent from './component/archive/ListStudent';
import ListStudentCard from './component/archive/ListStudentCard';




function App() {
  const productList = ["Laptop", "Phone"];
  const [students, setStudents] = useState([{
   firstName: 'Robert',
   lastName: 'Tylor',
   email: 'farnaz.towhidi@quickstart.com',
   image: 'robert.jpg',
   comments: 'Looking forward to learning more!'
 }, {
   firstName: 'Joshua',
   lastName: 'Pierson',
   email: 'Josh@quickstart.com',
   image: 'joshua.jpg',
   comments: 'Looking forward to learning more!'
 }]);


  return (
    <>
      <ListStudent students={students} setStudents={setStudents} />
       {/* <FormSingleState students={students} setStudents={setStudents} /> */}
      {/* <ListStudentCard students={students} /> */}

      {/* <FormMultiState /> */}
      {/* <Header />
      <Registration productList={productList} />
      <Footer /> */}


      {/* <PropsWithoutDes studentFirstName="Farnaz" studentLastName="Towhidi" />
      <PropsWithDes studentFirstName="Shelby" studentLastName="Hurota"  /> */}
      
    </>
  );
}

export default App;
