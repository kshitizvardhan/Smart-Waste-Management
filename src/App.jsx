import React, { useState, useEffect } from 'react';

const IframeComponent = ({ title, src }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <div className="w-full md:w-1/2 p-4">
      <h5 className="text-lg font-semibold mb-2">{title}</h5>
      {loading && <div className="loader"></div>}
      {error ? (
        <div className="bg-red-100 text-red-800 p-2 rounded">Failed to load data for {title}. Please try again later.</div>
      ) : (
        <iframe
          width="100%"
          height="260"
          className="border border-gray-300"
          src={src}
          onLoad={handleLoad}
          onError={handleError}
          title={title}
        ></iframe>
      )}
    </div>
  );
};

function App() {
  const [showAlert, setShowAlert] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="font-sans">
      <nav className="bg-gray-900 text-white px-4 py-3 lg:px-44">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold">Smart Waste Management</a>
          <button onClick={() => setNavOpen(!navOpen)} className="text-white md:hidden">
            ☰
          </button>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="px-4 py-2">Home</a>
            <a href="#bins" className="px-4 py-2">Bins Status</a>
            <a href="#about" className="px-4 py-2">About</a>
            <a href="#contact" className="px-4 py-2">Contact</a>
          </div>
        </div>

        
        {navOpen && (
          <>
          
            <div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setNavOpen(false)}
            ></div>

            
            <div className="fixed top-0 left-0 w-3/4 h-full bg-gray-900 text-white p-6 transition-transform duration-300 transform translate-x-0">
              <button onClick={() => setNavOpen(false)} className="text-right text-2xl font-semibold">&times;</button>
              <div className="mt-8 space-y-4">
                <a href="#home" className="block text-lg" onClick={() => setNavOpen(false)}>Home</a>
                <a href="#bins" className="block text-lg" onClick={() => setNavOpen(false)}>Bins Status</a>
                <a href="#about" className="block text-lg" onClick={() => setNavOpen(false)}>About</a>
                <a href="#contact" className="block text-lg" onClick={() => setNavOpen(false)}>Contact</a>
              </div>
            </div>
          </>
        )}
      </nav>

      {showAlert && (
        <div className="bg-blue-100 text-blue-800 text-center p-2">
          Welcome to the Smart Waste Management System! Here, you can monitor real-time waste levels.
        </div>
      )}

      <div className="container mx-auto my-8 px-10 lg:px-44">
        <h1 className="text-3xl text-center font-bold mb-4">Smart Waste Management System</h1>
        <p className="text-center text-gray-700">Real-time monitoring of waste bins to optimize waste collection and management.</p>

        <section id="bins" className="mt-8">
          <div className="flex flex-wrap -mx-4">
            <IframeComponent
              title="Bin 1: Level"
              src="https://thingspeak.com/channels/2649102/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=10&type=line&api_key=543B95MI6BSVJ2NP"
            />
            <IframeComponent
              title="Bin 2: Level"
              src="https://thingspeak.com/channels/2649102/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=10&type=line&api_key=543B95MI6BSVJ2NP"
            />
            <IframeComponent
              title="Bin 3: Level"
              src="https://thingspeak.com/channels/2649102/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=10&type=line&api_key=543B95MI6BSVJ2NP"
            />
            <IframeComponent
              title="All Bins: Status"
              src="https://thingspeak.mathworks.com/apps/matlab_visualizations/587909"
            />
          </div>
        </section>

       
        <section id="about" className="mt-8">
          <h2 className="text-2xl font-bold">About the Project</h2>
          <p className="text-gray-700 mt-2">This Smart Waste Management System provides real-time tracking and monitoring of waste bin levels to help optimize waste collection and reduce environmental impact. By monitoring waste levels in various bins, the system ensures timely collection and contributes to a cleaner, healthier environment.</p>
        </section>

      
        <section id="contact" className="mt-8">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-gray-700 mt-2">If you have any questions or would like more information about the Smart Waste Management System, feel free to reach out to us.</p>
          <ul className="text-gray-700 list-disc pl-5">
            <li>Email: info@smartwastemanagement.com</li>
            <li>Phone: +91 9781544597, +91 6284471519</li>
          </ul>
        </section>
      </div>

      
      <footer className="bg-gray-900 text-white text-center p-4 mt-8">
        <p className="text-sm">&copy; 2024 Smart Waste Management System, Project Group-5</p>
        <p className="text-sm">Made by Kanwalpreet Singh, Kshitiz Vardhan, Harsahej Kaur, M Anup Simha, Krish Bhaukhandi</p>
      </footer>
    </div>
  );
}

export default App;
