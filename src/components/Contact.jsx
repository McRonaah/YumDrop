import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import photo from "../img/WhatsApp Image 2023-04-09 at 16.26.55.jpeg";

import firebase from "firebase/app";
import "firebase/database";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    const database = firebase.database();
    database.ref("messages").push({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message,
    })
      .then(() => {
        alert("Thank you for your message!");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred. Please try again later.");
      });
  }
  return (
    <div className="flex flex-wrap rounded bg-[url('file:///home/ronald/amplification/angular/My_Profile/src/assets/images/background-images/diego-ph-fIq0tET6llw-unsplash.jpg')] bg-cover bg-no-repeat">
      <div className="w-full md:w-1/2 p-4 h-1/4">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">We'd love to hear from you!</p>
        <p>Don't hesitate to message us via what'sApp by clicking the icon
            <a href="https://wa.me/+254702233145/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="text-gray-400  hover:text-white transition-all duration-300 ml-2"  />.
            </a>
        </p>
        <p>Or make a call to us on&nbsp;
            <a href="tel:+254111310907" target="_blank" rel="noopener noreferrer" 
            className="text-gray-400  hover:text-white transition-all duration-300"><i class="fa fa-phone"></i>+254111310907</a>
        </p>
        <img src={photo} alt="Contact Us" className=" h-96 w-80 mb-4 rounded " />
        <p>Thank you for taking the time to browse through the site shot an email&nbsp;
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ronaldcheruiyot342@gmail.com" target="_blank" rel="noopener noreferrer" 
        className="text-gray-400  hover:text-white transition-all duration-300"> 
            <i class="fa fa-envelope"></i>ronaldcheruiyot342@gmail.com</a>
            &nbsp;and we will get back within 24 hrs.
        </p>
      </div>
      <div className="w-full h-full md:w-1/2 p-4">
        <form className="rounded-lg shadow-md p-8" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-4">Please fill out the form below and we'll get back to you shortly.</p>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" 
            value={name}
            onChange={(event) => setName(event.target.value)}
            required/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
             value={phoneNumber}
             onChange={(event) => setPhoneNumber(event.target.value)}
             required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2" type="required">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" 
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
