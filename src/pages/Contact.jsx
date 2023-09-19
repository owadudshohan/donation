import React, { useState } from "react";
import "../styles/Contact.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Contact = () => {

    const [contact, setContact] = useState({name: "", email: "", subject: "",ques: "" })
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setContact((prev) => {
            return {...prev, [name] : value}
        })
    }

    const handleAdd = async(e) =>{
        e.preventDefault();
        await addDoc(collection(db, "question"),{
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          ques: contact.ques,
          timeStamp: serverTimestamp()
        });
        navigate(-1)
      }

    return (

        <div>
            <Navbar />
            <section id="about-home">
                <h2>Contact Us/</h2>
            </section>

            <section id="contact">
                <div class="getin">
                    <h2>Get in touch</h2>
                    <p>Looking for help? Fill the form and start a new adventure.</p>

                    <div class="details">
                        <h3>Headquater</h3>
                        <div>
                            <i class="far fa-house get"></i>
                            <p>CHARITY BANGLADESH, House No 98, Green University, Rd No-5, Dhaka 1213</p>
                        </div>

                        <h3>Phone</h3>
                        <div>
                            <i class="fas fa-phone-alt get"></i>
                            <p><a href="tel:+8802-9883439">+8802-9883439</a></p>
                        </div>

                        <h3>Support</h3>
                        <div>
                            <i class="fas fa-envelope get"></i>
                            <p><a href="mailto:charity@gmail.com">charity@gmail.com</a></p>
                        </div>
                        <h3>Follow Us</h3>
                        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
                    </div>
                </div>
                <form class="form" onSubmit={handleAdd}>
                    <h4>Let's Connect</h4>

                    <div class="form-row">
                        <input name="name" placeholder="Enter Full Name..." type="text" value={contact.name} onChange={handleChange}/>
                        <input name="email" placeholder="Enter Email..." type="text" value={contact.email} onChange={handleChange}/>

                    </div>
                    <div class="form-col">
                        <input name="subject" placeholder="Enter Subjects" type="text" value={contact.subject} onChange={handleChange}/>
                    </div>
                    <div class="form-col">
                        <textarea name="ques" id="" cols="30" rows="10" placeholder="How can we Help?" value={contact.ques} onChange={handleChange}></textarea>
                    </div>
                    <div class="form-col">
                        <button>Send Message</button>
                    </div>


                </form>
            </section>

            <section id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8906664522187!2d90.3749737750159!3d23.786907378645424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73586a94e75%3A0xa9ef83ac46e5f7fa!2sGreen%20University%20Of%20Bangladesh%2C%20Begum%20Rokeya%20Avenue%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1687277008828!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;