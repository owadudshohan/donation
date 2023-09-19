import "../styles/Login.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault();


    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/dashboard")
      })
      .catch((error) => {
        setError(true)
      });

  }

  return (
    <div>
      <Navbar />

      <div className='loginPage'>
        <div>
          <div class="wrapper">
            <h2>SIGN UP</h2>

            <form onSubmit={handleLogin} action="">
              <div class="input-group">


                <div class="input-box">
                  <input className='textField' type="email" placeholder="example@gmail.com" required
                    onChange={e => setEmail(e.target.value)} />
                  <i className="icon"><EmailIcon /></i>
                </div>

                <div class="input-box">
                  <input className='textField' type="password" placeholder="Enter Your Password" required
                    onChange={e => setPassword(e.target.value)} />
                  <i className="icon"><PasswordIcon /></i>
                </div>
                {error && <span>Email already exist!</span>}

                <p className='textRead'>If You have an account? <Link to="/login">Login here</Link> </p>
                <div class="input-box">
                  <button className="btnSub" type="submit">Signup</button>

                </div><br />
                <p>* By signing up, you agree to our Terms of Use and to receive our emails & updates and acknowledge you've read our Privacy Policy.</p>

              </div>
            </form><br />
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

export default Signup