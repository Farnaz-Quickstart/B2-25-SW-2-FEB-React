import './App.css';
import Greeting from './component/Greeting'
import GreetingWithState from './component/GreetingWithState'
import GreetingWithStyle from './component/GreetingWithStyle'
import PropsNoDestructing from './component/PropsNoDestructing'
import PropsWithDestructing from './component/PropsWithDestructing'
import FormMultiState from './component/FormMultiState';


function App() {
  return (
    <>
      <Greeting />
      <GreetingWithState />
      <GreetingWithStyle />
      <PropsNoDestructing name="Ali" />
      <PropsWithDestructing name="Farnaz" />
      <FormMultiState />
    </>
  );
}

export default App;
