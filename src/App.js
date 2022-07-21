//import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import {useState} from 'react'; //hook
import axios from 'axios';

function App() {
  // const nameState = useState("Ciccio");
  // const name = nameState[0];
  // const setName = nameState[1];
  const [name, setName] = useState("Ciccio");
  const [surname, setSurname] = useState("Pasticcio");
  //let name = "Ciccio";
  //let surname = "Pasticcio";
  const mainSearch = (n) => console.log(n);
  const changeData = (e) => {
    setName("Pippo");
    setSurname("De Pippis");
  };
  const loadData = () => {
    axios.get("http://localhost:8080/course")
    .then((res) => console.log(res))
  };
 
  return (
    <div className="App">
      <p>Hello {name} {surname}!</p>
      <button onClick={changeData}>Click Me</button>
      <button onClick={loadData}>Load Data from Server</button>
      <MyComponent clientName={name} goldUser="true" onSubmit={mainSearch} />
      
      
    </div>
  );
}

export default App;
