import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import "../styles/Login.css"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const People = () => {

  const [people, setPeople] = useState({ name: "", gender: "", nid: "", phone: "", address: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPeople((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "people"), {
      name: people.name,
      gender: people.gender,
      nid: people.nid,
      phone: people.phone,
      address: people.address,
      reason: people.reason,
      timeStamp: serverTimestamp()
    });
    navigate(-1)

  }

  return (
    <div>
      <Navbar />

      <div className='loginPage'>
        <div>
          <div class="wrapper">
            <h2>People Application Form</h2>
            <form action="" method="POST" onSubmit={handleAdd}>

              <div class="input-box">
                <input className='textField' type="text" name="name" placeholder="Full Name" required value={people.name} onChange={handleChange} />
                <i class="bx bx-user icon"></i>
              </div>

              <div class="input-box">
                <input type="text" name="gender" placeholder="Enter your Gender" required className='textField'
                  value={people.gender} onChange={handleChange} /><i class="bx bx-credit-card icon"></i>
              </div>

              <div class="input-box">
                <input type="number" name="nid" placeholder="National ID Card Number" required className='textField'
                  value={people.nid} onChange={handleChange} /><i class="bx bx-credit-card icon"></i>
              </div>

              <div class="input-box">
                <input type="number" name="phone" placeholder="Active Contact Number" required className='textField'
                  value={people.phone} onChange={handleChange} /><i class="bx bx-credit-card icon"></i>
              </div>
              <div class="input-box">
                <textarea name="address" id="" cols="30" rows="5" className='textField' placeholder="Enter Your Present Address" value={people.address} onChange={handleChange}></textarea>
              </div>
              <div class="input-box">
                <textarea name="reason" id="" cols="30" rows="5" className='textField' placeholder="Why you need Help from Us. Describe Shortly" value={people.reason} onChange={handleChange}></textarea>
              </div>
              <div class="input-box">
                <button className='btnSub' type="submit" name="submit">PAY NOW</button>
              </div>


            </form><br /><br />
            <div className="social">
              <InstagramIcon /> <TwitterIcon /> <FacebookIcon />

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>

  )
}

export default People