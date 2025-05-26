import './App.css';
import Header from './component/Header';
import Footer from './component/Footer'
import PropsWithoutDes from './component/PropsWithoutDes';
import PropsWithDes from './component/PropsWithDes';
import FormMultiState from './component/archive/FormMultiState';
import FormSingleState from './component/archive/FormSingleState';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './component/Registration';



function App() {
  const productList = ["Laptop", "Phone"];


  return (
    <>
      <Header /> 
      <Registration productList={productList} />
 
      <Footer year="2025" /> 
      {/* <FormSingleState /> */}
      {/* <PropsWithoutDes studentFirstName="Farnaz" studentLastName="Towhidi" />
      <PropsWithDes studentFirstName="Shelby" studentLastName="Hurota"  /> */}
      {/* <FormMultiState /> */}
    </>
  );
}

export default App;
