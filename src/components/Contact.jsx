import React from 'react';

function Contact() {
  return (
    <div className="flex flex-wrap bg-blue-400 rounded ">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">We'd love to hear from you!</p>
        <p className="mb-2">Send us a message and we'll get back to you as soon as possible.</p>
        <img src="https://via.placeholder.com/300x200" alt="Contact Us" className="mb-4" />

      </div>
      <div className="w-full md:w-1/2 p-4">
        <form className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-4">Please fill out the form below and we'll get back to you shortly.</p>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2" type="required">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-gray"></textarea>
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
