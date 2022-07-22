//import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
// import {useState} from 'react'; //hook
import axios from 'axios';

function App() {
  // // const nameState = useState("Ciccio");
  // // const name = nameState[0];
  // // const setName = nameState[1];
  // const [name, setName] = useState("Ciccio");
  // const [surname, setSurname] = useState("Pasticcio");
  // //let name = "Ciccio";
  // //let surname = "Pasticcio";
  // const mainSearch = (n) => console.log(n);
  // const changeData = (e) => {
  //   setName("Pippo");
  //   setSurname("De Pippis");
  // };
  const loadCourses = () => {
    axios.get("http://localhost:8080/course")
    .then((res) => console.log(res))
  };
  const loadLatestEditions = () => {
    axios.get("http://localhost:8080/edition?latestEditions=true")
    .then(response => console.log(response))
  };
 
  return (
    <div className="App">
      {/* <p>Hello {name} {surname}!</p>
      <button onClick={changeData}>Click Me</button> */}
      <button onClick={loadCourses}>Show List of Courses</button>
      <button onClick={loadLatestEditions}>Load Latest 4 Course Editions</button>
      {/* <MyComponent clientName={name} goldUser="true" onSubmit={mainSearch} /> */}
      <section>
        <article>
          {/* 4 article in grid 2x2*/}
          <p>Edition one</p>
        </article>
        <article>
          <p>Edition two</p>
        </article>
        <article>
          <p>Edition three</p>
        </article>
        <article>
          <p>Edition four</p>
        </article>
      </section>
    </div>
  );
}

export default App;
