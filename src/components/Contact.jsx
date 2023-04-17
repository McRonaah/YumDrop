import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import food from "../img/images/food.jpeg";

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

firebase.initializeApp({
  apiKey: "AIzaSyDr7s7OIivPPCh6mJ7D69Pn2yT5iPpB2Ow",
    authDomain: "food-delivery-app-9e7fa.firebaseapp.com",
    databaseURL: "https://food-delivery-app-9e7fa-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-9e7fa",
    storageBucket: "food-delivery-app-9e7fa.appspot.com",
    messagingSenderId: "696861491754",
    appId: "1:696861491754:web:a468282247acbaa08c7953"
});

const database = firebase.database();


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, message } = formData;

    database.ref("messages")
      .push({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
        timestamp: Date.now(),
      })
      .then(() => {
        console.log("Data successfully written to Firestore!");
        alert('Data submitted successfully!');
        window.location.href = 'https://yumdrop-food.netlify.app/'
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  return (
    <div className="flex flex-wrap rounded bg-[url('https://pas-wordpress-media.s3.amazonaws.com/content/uploads/2017/10/idea-but-no-funding.jpg')] bg-cover bg-no-repeat">
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
        <img src={food} alt="Contact Us" className=" h-96 w-80 mb-4 rounded " />
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
           value={formData.name}
           onChange={handleChange}
            required/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" 
             value={formData.email}
             onChange={handleChange}
            required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phoneNumber" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"
             value={formData.phoneNumber}
             onChange={handleChange}
             required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2" type="required">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" 
             value={formData.message}
             onChange={handleChange}
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
