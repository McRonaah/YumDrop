import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTruck,
  faClock,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-10">Our Services</h1>
      
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faUtensils} className="text-white" />
            </div>
            <h2 className="text-lg font-medium ml-4">Delicious Food</h2>
          </div>
          <p className="text-gray-600">
            We provide a wide range of delicious food items that you can choose
            from. Our food is made with fresh and high-quality ingredients to
            ensure that it tastes amazing.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faTruck} className="text-white" />
            </div>
            <h2 className="text-lg font-medium ml-4">Fast Delivery</h2>
          </div>
          <p className="text-gray-600">
            We understand that you don't want to wait long for your food to
            arrive. That's why we offer fast and reliable delivery services. We
            deliver your food to you as quickly as possible.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faClock} className="text-white" />
            </div>
            <h2 className="text-lg font-medium ml-4">24/7 Service</h2>
          </div>
          <p className="text-gray-600">
            We are always available to serve you. Our customer service team is
            available 24/7 to answer any questions or concerns you may have. You
            can contact us anytime and we'll be happy to help.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faCreditCard} className="text-white" />
            </div>
            <h2 className="text-lg font-medium ml-4">Easy Payment</h2>
          </div>
          <p className="text-gray-600">
            We offer multiple payment options to make it easy for you to pay for
            your food.Our payment process is quick
              and secure, so you can enjoy your food without any worries.</p>
        </div>
     </div>

     <div className="max-w-sm w-full sm:max-w-md">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-gray-700 text-white px-4 py-2 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Our Services</h2>
            <FontAwesomeIcon icon={faUtensils} className="text-2xl" />
          </div>
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold mb-4">Food Delivery</h3>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faTruck} className="text-gray-600 mr-2" />
              <p>Fast and reliable delivery</p>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faClock} className="text-gray-600 mr-2" />
              <p>24/7 service available</p>
            </div>
            {/* payment details */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="card-number"
                >
                  Card Number
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded-md py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="card-number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="card-expiry"
                  >
                    Expiry Date
                  </label>
                  <input
                    className="appearance-none border border-gray-300 rounded-md py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    id="card-expiry"
                    type="text"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <label
                    className="block text-gray-700 font-semibold mb-2"
                    htmlFor="card-cvv"
                  >
                    CVV
                  </label>
                  <input
                    className="appearance-none border border-gray-300 rounded-md py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    id="card-cvv"
                    type="text"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-6">
              Place Order
            </button>
          </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Services;