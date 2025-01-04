import React from 'react';
import { FaFacebookF,  FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
// import { FaHouse } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="relative pb-12 pt-20 bg-[rgba(192,214,223,1)]  rounded-3xl">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
        
        {/* 2nd part */}
        <div className='md:mx-auto'>
            <h1 className='footer_heading
            '>Popular Residential Searches</h1>
            <p className='footer_link'>Property for Sale in Jaipur</p>
            <p className='footer_link'>Flats in jaipur</p>
            <p className='footer_link'>Ready To Move Flats in Jaipur</p>
            <p className='footer_link'>Resale House inJaipur</p>
            <p className='footer_link'>Villas for Sale in Jaipur</p>
            <p className='footer_link'>House for Sale in Jaipur</p>





        </div>

        {/* 3rd part */}
        <div className='md:mx-auto'>
            <h1 className='footer_heading
            '>Company</h1>
            <p className='footer_link'>About Us</p>
            <p className='footer_link'>Contact Us</p>
            <p className='footer_link'>Terms and Conditions</p>
            <p className='footer_link'>Request Info</p>
            
        </div>
        {/* 4th parts */}
        <div className='md:mx-auto'>
            <h1 className='footer_heading
            '>Connect with us</h1>
             {/* <div className='flex items-center space-x-4 mt-6'>
            <SiInstagram className='w-6 h-6 text-white'/>
            <FaWhatsapp className='w-6 h-6 text-white'/>
            <FaXTwitter className='w-6 h-6 text-white'/>
            <FiFacebook className='w-6 h-6 text-white'/>
          </div> */}

          <div className='flex items-center space-x-4 mt-6'>
            <FaFacebookF className='w-6 h-6 text-blue-600'/>
            <FaTwitter className='w-6 h-6 text-sky-500'/>
            <FaYoutube className='w-6 h-6 text-red-700'/>
            <FaInstagramSquare className='w-6 h-6 text-pink-600'/>
          </div>
          <div className='flex justify-center items-center bg-[rgba(22,96,136,1)] mt-10'>
            <button className='text-white
            
            '>Login/Register</button>
          </div>
          <div className=' mt-6'>
            <h1 className='footer_link'>Contact Us</h1>
            <h4 className='text-white'>Toll Free-1800 18 00000</h4>
            <h6 className='text-white'>9:30 AM to 6:30 PM (Mon-Sun)</h6>

            <div className='footer_link'>
                Email:feedback@99acers.com
            </div>

          </div>
        </div>
     
      </div>
      <p className='text-center mt-4 justify-center items-center text-base text-white opacity-70'>© Photo, Inc. 2025. We love our users!</p>



    </div>
  );
};

export default Footer;
