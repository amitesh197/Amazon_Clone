import React from 'react'
import './footer.css';

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

  return (
    <footer>
        <div className='footer_container'>
            <div className='footr_details_one'>
                <h3>Get to Know Us</h3>
                <p>About Us</p>
                <p>Career</p>
                <p>Press Releases</p>
                <p>Amazon Customer Service</p>
            </div>
            <div className='footr_details_one'>
                <h3>Connect with Us</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Threads</p>
            </div>
            <div className='footr_details_one forres'>
                <h3> Make Money with Us</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Threads</p>
            </div>
            <div className='footr_details_one forres'>
                <h3>Get to Know Us</h3>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Threads</p>
            </div>
        </div>
        <div className='lastdetails'>
            <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, Amazon.com, Inc. or its affiliates</p>
        </div>
    </footer>
  )
}

export default Footer