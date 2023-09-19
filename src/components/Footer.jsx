import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div >
      <footer>
        <div className="footer">
        <div class="footer-col">
            <h3>Donors</h3>
            <li>Give or Redeem Gift Cards</li>
            <li>Donate in Honor</li>
            <li>Project of the Month Club</li>
            <li>Start a Fundraiser</li>
        </div>
        <div class="footer-col">
            <h3>Nonprofits</h3>
            <li>Start an Application</li>
            <li>Why Join?</li>
            <li>Handbook</li>
            <li>Pricing & Fees</li>
        </div>
        <div class="footer-col">
            <h3>Companies</h3>
            <li>Our Services</li>
            <li>Our Partners</li>
            <li>Corporate Gift Cards</li>
            <li>GlobalGiving Atlas</li>
        </div>
        <div class="footer-col">
            <h3>About Us</h3>
            <li>Our Team</li>
            <li>Jobs</li>
            <li>FAQs</li>
            <li>Contact Us</li>
        </div>
        <div class="footer-col">
            <h3>Learn Library</h3>
            <li>Nonprofit Resources</li>
            <li>Corporate Giving Resources</li>
            <li>Donor Resources</li>
            <li>Success Stories</li>
        </div>
        </div>

        <div className="under">
        <div class="copyright">
            <p>Copyright &copy;<script> document.write(new Date().getFullYear());</script>2023 GlobalGiving, organization Registered Charity in Bangladesh. </p>
            <div class="social">
                <p>Support Us!</p>
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            </div>
        </div>

        </div>
        
        
    </footer>

    </div>
  );
}

export default Footer;