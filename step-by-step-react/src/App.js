import './App.css';
import PropsWithoutDes from './component/PropsWithoutDes';
import PropsWithDes from './component/PropsWithDes';
import FormMultiState from './component/FormMultiState';
import FormSingleState from './component/FormSingleState';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer'
import Registration from './component/Registration';




function App() {
  const productList = ["Laptop", "Phone"];


  return (
    <>
    <FormSingleState />
      {/* <FormMultiState /> */}
      {/* <Header />
      <Registration productList={productList} />
      <Footer /> */}

      {/* <FormSingleState /> */}
      {/* <PropsWithoutDes studentFirstName="Farnaz" studentLastName="Towhidi" />
      <PropsWithDes studentFirstName="Shelby" studentLastName="Hurota"  /> */}
      
    </>
  );
}

export default App;
