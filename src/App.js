import React, { useContext } from 'react'
//frontend

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
//dashboard
import Home1 from "./Dashboard/./pages/home/Home1";
import List from "./Dashboard/./pages/list/List";
import List1 from "./Dashboard/./pages/list/List1";
import List2 from "./Dashboard/./pages/list/List2";
import List3 from "./Dashboard/./pages/list/List3";
import New from "./Dashboard/./pages/user/user";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { userInputs, donorInputs, peopleInputs } from "./Dashboard/./formSource";
import { AuthContext } from "./Dashboard/./context/AuthContext"
import NewDonor from './Dashboard/pages/donor/Donor';
import New2 from './Dashboard/pages/people/people';
import AddPeople from './pages/AddPeople';



function App() {
  const { currentUser } = useContext(AuthContext)



  const RequireAuth = ({ childern }) => {
    return currentUser ? childern : <Navigate to="/login" />
  };
  console.log(currentUser)

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/event' element={<Event />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/addpeople' element={<AddPeople />} />
          </Routes>

          <Routes>
            <Route path="dashboard" element={<Home1 />} />

            <Route path="/users">
              <Route index element={<List />} />
              <Route path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="/donor">
              <Route index element={<List1 />} />
              <Route path="new"
                element={<NewDonor inputs={donorInputs} title="Add New Donor" />}
              />
              </Route>

              <Route path="/people">
                <Route index element={<List2 />} />
                <Route path="new"
                  element={<New2 inputs={peopleInputs} title="Add New People" />}
                />
              </Route>

              <Route path="/question">
                <Route index element={<List3 />} />
                
                
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

