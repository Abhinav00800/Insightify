import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { FaHandsHelping, FaShieldAlt, FaUsers, FaLightbulb } from 'react-icons/fa'; // Importing icons for values

const About = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-12 max-w-3xl mx-auto">
            We are a community-driven platform designed to help local entrepreneurs grow their businesses by offering competitive prices and promoting visibility within their local communities.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mb-12 max-w-3xl mx-auto">
            Our site is also designed to improve the efficiency of students by maintaining a comprehensive student dashboard. This dashboard tracks every class, provides detailed lecture summaries, generates useful questions based on the lecture content, and allows students to rate each lecture to enhance their learning experience.
          </p>

          <div className="flex flex-col lg:flex-row justify-center space-y-12 lg:space-y-0 lg:space-x-10">
            {/* Mission Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-xs mx-auto transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-6 text-3xl text-blue-600">
                <FaHandsHelping />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                
Our goal is to significantly enhance the efficiency of students by incorporating advanced teaching techniques. By utilizing innovative and effective methods, we aim to foster a deeper understanding of the material, improve learning outcomes, and help students develop critical thinking and problem-solving skills. 
                </p>
            </div>

            {/* Values Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-xs mx-auto transition duration-300 transform hover:scale-105">
              <div className="flex items-center justify-center mb-6 text-3xl text-green-600">
                <FaShieldAlt />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-2">
                  <FaUsers className="text-blue-500" />
                  <span>Community Empowerment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaShieldAlt className="text-blue-500" />
                  <span>Transparency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLightbulb className="text-blue-500" />
                  <span>Customer-Centric Approach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaHandsHelping className="text-blue-500" />
                  <span>Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
