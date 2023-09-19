import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import "../styles/Login.css"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Payment = () =>{

	const [payment, setPayment] = useState({name: "", email: "", gender: "",card: "",cardno: "",amount: "" })
	const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setPayment((prev) => {
            return {...prev, [name] : value}
        })
    }

    const handleAdd = async(e) =>{
        e.preventDefault();
        await addDoc(collection(db, "donor"),{
          name: payment.name,
          email: payment.email,
          gender: payment.gender,
          card: payment.card,
		  cardno: payment.cardno,
		  pin: payment.pin,
		  amount: payment.amount,
		  status: "Approved",
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
						<h2>Donation Form</h2>
						<form action="" method="POST" onSubmit={handleAdd}>

							<div class="input-box">
								<input className='textField' type="text" name="name" placeholder="Full Name" required value={payment.name} onChange={handleChange}/>
								<i class="bx bx-user icon"></i>
							</div>
							
							<div class="input-box">
								<input className='textField' name='email' type="email" placeholder="example@gmail.com" required
								value={payment.email} onChange={handleChange}/>
								<i className="icon"><EmailIcon /></i>
							</div>

							<div class="input-box">
								<input type="text" name="gender" placeholder="Enter your Gender" required className='textField' 
								value={payment.gender} onChange={handleChange}/><i class="bx bx-credit-card icon"></i>
							</div>

							<h4>Payment Details</h4>
							<div class="input-box">
								<input type="text" name="card" placeholder="Payment Method" required className='textField' 
								value={payment.card} onChange={handleChange}/><i class="bx bx-credit-card icon"></i>
							</div>

							<div class="input-box">
								<input type="number" name="cardno" placeholder="Card/Rocket/Bkash/Bank Acc. Number" required className='textField' 
								value={payment.cardno} onChange={handleChange}/><i class="bx bx-credit-card icon"></i>
							</div>
							<div class="input-box">
								<input type="password" name="pin" placeholder="Card/Rocket/Bkash Pin Number" required className='textField' 
								value={payment.pin} onChange={handleChange}/><i className="icon"><PasswordIcon /></i>
							</div>
							<div class="input-box">
								<input type="number" name="amount" placeholder="Amount" className='textField' 
								value={payment.amount} onChange={handleChange}/><i class="bx bx-money icon"></i>
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

export default Payment