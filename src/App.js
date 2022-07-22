//import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
import {useState} from 'react'; //hook
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
  //const [courses, setCourses] = useState([]);
  const [editions, setEditions] = useState([]);


  const loadCourses = () => {
    axios.get("http://localhost:8080/course")
    .then((res) => console.log(res))
  };
  const loadLatestEditions = () => {
    axios.get("http://localhost:8080/edition?latestEditions=true")
    .then(response => setEditions(response.data))
  };

  loadLatestEditions();
 
  return (
    <>
    <section className="grid-container">
      <section id="topRow">
      <div className="header">
        <div className="logo">
          <img src="./img/logo.png" alt="logo" width="150" height="100" />
        </div>

          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Editions</a></li>
            <li><a href="#">Courses</a></li>
          </ul>

          <div className="cta">
            <a href="#" className="button">Contacts</a>
          </div>
        </div>
      <div className="hero">
        <div className="hero_content">
          <video autoPlay id="heroVideo" loop muted>
            <source src="./vid/video.mp4" type="video/mp4"/>
          </video>
          {/*<a href="#" className="button">Discover More</a>*/}
        </div>
        <div>
          <p className="intro-text">Welcome to the Bootcamp for Backend Java Developers <br/> by Workfully &amp; Accenture!</p>
          <h1 className="big-text">BOOTCAMP</h1>
        </div>
      </div>
      </section>
        {/* <p>Hello {name} {surname}!</p>
        <button onClick={changeData}>Click Me</button> */}
        {/* <button onClick={loadCourses}>Show List of Courses</button>
        <button onClick={loadLatestEditions}>Load Latest 4 Course Editions</button> */}
        {/* <MyComponent clientName={name} goldUser="true" onSubmit={mainSearch} /> */}
        <section id="presentation">
          <p>hello world</p>
        </section>
          {
            editions.map(e => { /* editionDetail(e)*/
              return (
                <article key={e.id} className="grid-item">
                  <p>Edition id: {e.id}</p>
                  <p>Course id: {e.courseId}</p>
                  <p>Course Title: {e.courseTitle}</p>
                  <p>Start Date: {e.startDate}</p>
                  <p>End Date: {e.endDate}</p>
                  <p>Financing: {e.financing}</p>
                  <p>Tutor: {e.tutorName} {e.tutorSurname}</p> {/*{e.tutorId}*/}
                  <p>Cost: {e.cost}</p>
                  <p>Code: {e.code}</p>
                </article>
            );
          })
          }

        {/* <article className="grid-item">
          <p>Title: Java For Beginners</p>
          <p>Start Date: 01-04-2020</p>
          <p>End Date: 25-06-2020</p>
          <p>Financing: Public</p>
          <p>Tutor: Andrea Di Giugno</p>
          <p>Cost: 800</p>
          <p>Code: A5F7G3</p>
        </article>
        <article className="grid-item">
          <p>Title: Go For Japanese Chess Players</p>
          <p>Start Date: 23-11-2025</p>
          <p>End Date: 11-03-2026</p>
          <p>Financing: Private</p>
          <p>Tutor: Takamoto Hoshisama</p>
          <p>Cost: 1231241411</p>
          <p>Code: 8HF87H</p>
        </article>
        <article className="grid-item">
          <p>Title: WTF is a Monad? CRustaceans Assemble!</p>
          <p>Start Date: 13-05-2022</p>
          <p>End Date: 22-07-2022</p>
          <p>Financing: Private</p>
          <p>Tutor: Franco Mattei</p>
          <p>Cost: 1500</p>
          <p>Code: R7B4L9</p>
        </article>
        <article className="grid-item">
          <p>Title: Learn to Make your Own Web Page in just a Decade</p>
          <p>Start Date: 15-06-2010</p>
          <p>End Date: 15-06-2020</p>
          <p>Financing: Public</p>
          <p>Tutor: Franz Kafka</p>
          <p>Cost: 5</p>
          <p>Code: 7F2B9F82</p>
        </article> */}
      <footer>
        <p>End of Page</p>
      </footer>
    </section>
    </>
  );
}

export default App;
