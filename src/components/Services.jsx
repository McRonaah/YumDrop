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
            your food. You can pay with your credit  card, debit card, or use mobile payment apps such as Apple Pay or Google Pay. Our payment process is quick and secure, so you can enjoy your food without any worries.</p>
</div>
</div>
</div>
  );
};

export default Services;