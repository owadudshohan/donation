import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SupportIcon from '@mui/icons-material/Support';
import BusinessIcon from '@mui/icons-material/Business';
import trust1 from "../assets/img/1.png"
import trust2 from "../assets/img/2.png"
import trust3 from "../assets/img/3.png"
import trust4 from "../assets/img/4.png"
import trust5 from "../assets/img/5.png"
import trust6 from "../assets/img/6.png"
import edu from "../assets/img/edu.png"
import food from "../assets/img/food.png"
import water from "../assets/img/water.png"
import { Link } from "react-router-dom";
import Table from "../Dashboard/components/table/Table"
import Table1 from "../Dashboard/components/table/Table1"
import "../styles/Home.css";

function Home() {
    return (

        <div>
            <Navbar />

            <div id="home">
                <h2>No One Should Go To Bed Hungry</h2>
                <p>“Never get tired of doing little things for others. Sometimes, those little things occupy the biggest part of their hearts.”</p>
                <div className="btnhome">
                    <Link to="/payment"><button className="blue">Donate Now</button></Link>
                    <Link to="/addpeople"><button className="aqua">Add People</button></Link>

                </div>
            </div>

            <div id="features">
                <h1>How It Works?</h1>
                <p>We Are In A Mission To Help The Helpless.</p>
                <div className="fea-base">
                    <div className="fea-box">
                        <MonetizationOnIcon />
                        <h3>NONPROFITS</h3>
                        <p>Nonprofits around the world apply and join GlobalGiving to access more funding, to build new skills, and to make important connections.</p>
                    </div>
                    <div className="fea-box">
                        <SupportIcon />
                        <h3>DONORS</h3>
                        <p>People like you give to your favorite projects; you feel great when you get updates about how your money is put to work by trusted organizations.</p>
                    </div>
                    <div className="fea-box">
                        <BusinessIcon />
                        <h3>COMPANIES</h3>
                        <p>Generous companies and their employees further support high-impact projects with donations and grants, helping local communities thrive.</p>
                    </div>
                </div>
            </div>

            <div>
                <div id="features">
                    <h1>Our Cases You Can See</h1>
                    <p>Explore Our Latest Causes That We Works</p>
                </div>
                <div>
                    <div class="products">
                        <div class="product">
                            <img src={edu} />
                            <div class="caption">Ensure Education For Every Poor Children</div>
                            <div class="progress-bar">
                                <div class="progress" style={{ width: '40%' }}></div>
                            </div>
                            <div class="price">
                                Raised: $19.99 - Goal: $29.99
                            </div>
                            <div className="btn">
                                <Link to="/payment"><button className="blue">Donate</button></Link>
                            </div>
                        </div>

                        <div class="product">
                            <img src={food} />
                            <div class="caption">Providing Healthy Food For The Children</div>
                            <div class="progress-bar">
                                <div class="progress" style={{ width: '20%' }}></div>
                            </div>
                            <div class="price">
                                Raised: $29.99 - Goal: $39.99
                            </div>
                            <div className="btn">
                                <Link to="/payment"><button className="blue">Donate</button></Link>
                            </div>
                        </div>

                        <div class="product">
                            <img src={water} />
                            <div class="caption">Supply Drinking Water For The People</div>
                            <div class="progress-bar">
                                <div class="progress" style={{ width: '50%' }}></div>
                            </div>
                            <div class="price">
                                Raised: $14.99 - Goal: $24.99
                            </div>
                            <div className="btn">
                                <Link to="/payment"><button className="blue">Donate</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div id="features">
                <h1>Last Transactions</h1>
                <p>We Are In A Mission To Help The Helpless.</p>
                <div className="listContainer">
                    <Table />
                </div>
            </div>

            <div id="features">
                <h1>Needy People List</h1>
                <p>Here is the information of needy people</p>
                <div className="listContainer">
                    <Table1 />
                </div>
            </div>

            

            <div id="trust">
                <h1>Our Corporate Partners</h1>
                <p>We've made it possible for more than 550 companies to support local causes around the world. We help companies expand their philanthropic footprint with global nonprofit vetting, grantmaking, charitable gift cards, and digital campaigns to power cause marketing, disaster response, and employee giving.</p>
                <div className="trust-img">
                    <img src={trust1} />
                    <img src={trust2} />
                    <img src={trust3} />
                    <img src={trust4} />
                    <img src={trust5} />
                    <img src={trust6} />

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home