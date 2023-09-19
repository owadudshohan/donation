import React from 'react'
import poor from "../assets/img/poor.jpg";
import foisal from "../assets/img/foisal.jpg";
import shohan from "../assets/img/shohan.jpg";
import sabbir from "../assets/img/sabbir.jpg";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/About.css";
import GeoChart from '../charts/GeoChart';

function About() {
    return (
        <div>
            <Navbar />
            <div id="about-home">
                <h2>About/</h2>
            </div>
            <div id="nav-bottom">
                <div class="navigation-bottom">
                    <ul>
                        <li><a className="active" href="#">ABOUT</a></li>
                        <li><a href="">HOW IT WORKS</a></li>
                        <li><a href="#">WHO WE ARE</a></li>
                        <li><a href="#about-us">ABOUT US</a></li>
                    </ul>
                </div>
            </div>

            <div id="about-container">
                <div className="about-img">
                    <img src={poor} />

                </div>
                <div className="about-text">
                    <h2>We are here for helping poor people.</h2>
                    <p>GlobalGiving is a nonprofit that supports other nonprofits by connecting them to donors and companies. Since 2002, we've helped trusted, community-led organizations from Afghanistan to Zimbabwe (and hundreds of places in between) access the tools, training, and support they need to make our world a better place.</p>
                </div>
            </div>

            <div id="about-total">
                <div className="about-text">
                    <h4>Since 2002, we've helped raise more than</h4>
                    <h1>$810M</h1>
                    <h4>from</h4>
                    <h1>1,699,577</h1>
                    <h4>people like you who've supported</h4>
                    <h1>33,928</h1>
                    <h4>projects in</h4>
                    <h1>175+</h1>
                    <h4>countries.</h4>

                </div>

                <div className="about-img">
                    <GeoChart />

                </div>

            </div>

            <div id="features">
                <h1>Our Story</h1>
                <p>By 1997, Mari Kuraishi and Dennis Whittle were convinced many key innovations in global development weren't getting the attention they deserved. Believing there had to be a better way to do aid, they started an experiment. In February 2000, they invited any social entrepreneur to pitch his or her earth-changing idea at the World Bank. The 300+ participants ranged from a group of NASA scientists to a woman who'd never before left her Ugandan village. <br></br> The event was a success, and Mari and Dennis realized good ideas can come from anyone, anywhere, at any time. They also realized there were many others who wanted to support good ideas. So they left the Bank to launch the world’s first crowdfunding community in 2002. Today, people in 175+ countries can easily share their ideas, and individual donors and companies can easily support vetted nonprofits through GlobalGiving.</p>
                <div className="fea-base">
                    <div className="fea-box">
                        <h3>MISSION</h3>
                        <p>To transform aid and philanthropy to accelerate community-led change.</p>
                    </div>
                    <div className="fea-box">
                        <h3>VISION</h3>
                        <p>Unleashed potential of people to make positive change happen.</p>
                    </div>
                    <div className="fea-box">
                        <h3>COMMITMENT</h3>
                        <p>Use our privilege, influence, and access to share power, delivering equitable and inclusive services so everyone in our community feels safe, valued, and supported.</p>
                    </div>
                </div>
            </div>

            <div id="about-us">
                <h3 className='midpoint'>Know About Our Group Members.</h3>
                <div class="items">
                    <div class="sub-box">
                        <img class="sub-img" src={foisal} alt="Image" />
                        <h5>Md. Mostak Mohosin</h5>
                        <div>
                            <p class="pra">BSc. in Computer Science and Engineering. <br />
                                Batch: 201</p>
                            <p className='midpoint'>
                                <a href="mailto:mostakmohosin1@gmail.com">mostakmohosin1@gmail.com</a><br />
                                <a href="tel:+8801639338634">+880 1639-338634</a>
                            </p>
                        </div>
                    </div>

                    <div class="sub-box">
                        <img class="sub-img" src={shohan} alt="Image" />
                        <h5>S.M. Owadud Rahman Shohan</h5>
                        <div>
                            <p class="pra">BSc. in Computer Science and Engineering. <br />
                                Batch: 201</p>
                            <p className='midpoint'>
                                <a href="mailto:jehansarker6@gmail.com">jehansarker6@gmail.com</a><br />
                                <a href="tel:+8801310275096">+880 1310-275096</a>
                            </p>
                        </div>
                    </div>

                    <div class="sub-box">
                        <img class="sub-img" src={sabbir} alt="Image" />
                        <h5>Md. Sabbir Ahmed</h5>
                        <div >
                            <p class="pra">BSc. in Computer Science and Engineering. <br />
                                Batch: 202</p>
                            <p className='midpoint'>
                                <a href="mailto:sabbir@gmail.com">sabbir@gmail.com</a><br />
                                <a href="tel:+88013654654">+880 136565464</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}

export default About