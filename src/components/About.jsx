import React from 'react';
import { Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from '../img/c7.png';

const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing food and super fast delivery! Highly recommend this service!'
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'I love the variety of restaurants available on this platform. Great job!'
    },
    {
      name: 'Mike Johnson',
      rating: 5,
      comment: 'The food was delicious and the delivery was on time. I will definitely order again!'
    }
  ];

const About = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const displayedReviews = isOpen ? reviews : reviews.slice(0, 2);


  return (
  
    <div className="flex flex-col items-center justify-center h-full">
    <div className="max-w-sm w-full sm:max-w-md lg:max-w-4xl ">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="bg-gray-700 text-white px-4 py-2 flex items-center justify-between">
          <h2 className="text-lg font-semibold">About Us</h2>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base mb-4">
            We are a food delivery company dedicated to providing our customers with the best dining experience from the comfort of their homes. 
          </p>
          <p className="text-gray-700 text-base mb-4">
            Our team is made up of passionate foodies and tech enthusiasts who strive to bring you delicious meals from top-rated restaurants, delivered to your doorstep in no time.
          </p>
          <p className="text-gray-700 text-base">
            We believe that good food brings people together and we are committed to making every meal an unforgettable experience.
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-64 object-cover rounded-b-md" src={Image} alt="About us" />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="absolute inset-y-0 left-0 px-4 py-4">
          <h3 className="text-white font-semibold">We are passionate about food</h3>
          <p className="text-gray-300">Join us on this culinary journey</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-2">What our customers are saying</h3>
        <div className="space-y-4">
            {displayedReviews.map((review, index) => (
              <Transition
                show={isOpen === true}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                key={index}
              >
                <div className="bg-white p-4 rounded-md shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-gray-700 font-medium">{review.name}</h4>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((star, index) => (
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" key={index} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{review.comment}</p>
                </div>
              </Transition>
            ))}
          </div>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Hide reviews' : 'Read all reviews'}
          </button>
                </div>
                </div>
        </div>
  )
}

export default About;