import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
    
  return (
    <div className="bg-blue-50 text-blue-900">
      {/* Header Section */}
      <Header/>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Empowering Students for Success
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Insightify helps students track their lectures, generate summaries, and evaluate their learning with interactive dashboards.
          </p>
          <div className="flex justify-center space-x-4">
          <Link to="/getstart" className="bg-white text-blue-700 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
          Get Started
          </Link>
          <Link to="/dashboard" className="bg-white text-blue-700 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
          Your Dashboard
          </Link>

            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Insightify?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Lecture Summaries"
              description="Automatically generate concise summaries for every lecture to help students review efficiently."
            />
            <FeatureCard
              title="Custom Questions"
              description="Generate tailored questions based on lecture content to enhance understanding and retention."
            />
            <FeatureCard
              title="Feedback System"
              description="Students can rate lectures to provide valuable feedback for improving teaching quality."
            />
          </div>
        </div>
      </section>

      {/* Graph Section */}
      <section id="benefits" className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Student Progress Insights</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Graph */}
            <div>
              <img
                src="https://via.placeholder.com/500x300"
                alt="Graph Placeholder"
                className="w-full shadow-lg rounded-lg"
              />
            </div>
            {/* Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Track Your Growth</h3>
              <p className="text-gray-700 mb-4">
                Insightify provides a detailed dashboard with analytics to track progress, identify weak areas, and celebrate improvements.
              </p>
              <ul className="space-y-2">
                <BenefitItem text="Visualize lecture engagement over time." />
                <BenefitItem text="Analyze performance across subjects." />
                <BenefitItem text="Access weekly progress reports." />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-blue-100 p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const BenefitItem = ({ text }) => (
  <li className="flex items-center space-x-2">
    <span className="bg-blue-600 text-white p-2 rounded-full">✔</span>
    <span>{text}</span>
  </li>
);

export default Home;
