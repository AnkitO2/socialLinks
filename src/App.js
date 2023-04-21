
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import"./Sociallinkone";
import Home from './Home';
import Abouts from './Abouts';
import Information from './Information';
import Contactus from './Contactus';
import Sociallinkone from './Sociallinkone';

function App() {
  return (
    <div className="App">
      <Sociallinkone/>
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
