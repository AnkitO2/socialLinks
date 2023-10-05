//import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
//import"./Sociallinkone";
//import Home from './Home';
//import Abouts from './Abouts';
//import Information from './Information';
//import Contactus from './Contactus';
//import Sociallinkone from './Sociallinkone';
//import Mapfunction from "./Mapfunction";

function App () {
  const [comments, setComments] = useState ([]);
  useEffect (() => {
    fetchComments ();
  }, []);
  useEffect (
    () => {
      console.log (comments);
    },
    [comments]
  );

  const fetchComments = async () => {
    const response = await axios (
      'https://jsonplaceholder.typicode.com/comments'
    );
    setComments (response.data);
  };
  return (
    <div className="App">
      {comments &&
        comments.map (comment => {
          return (
            <div
              key={comment.id}
              style={{alignItems: 'center', margin: '20px 60px'}}
            >
              <h4>{comment.name}</h4>
              <p>{comment.email}</p>
            </div>
          );
        })}

      {/* <BrowserRouter>

<NavLink to="/"> Home</NavLink>
&nbsp;
<NavLink to="/abouts"> AboutUs</NavLink>
&nbsp;
<NavLink to="/contactus"> ContactUs</NavLink>
&nbsp;
<NavLink to="/information"> Information</NavLink>
&nbsp;

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/abouts' element={<Abouts/>}/>
  <Route path='information' element={<Information/>}/>
  <Route path='contactus' element={<Contactus/>}/>
</Routes>


</BrowserRouter> */}

    </div>
  );
}

export default App;
