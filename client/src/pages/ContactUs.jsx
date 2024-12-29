import React, { useState } from 'react';
import { Vector } from '../assets';
import styles from '../style';
import Sidebar from '../components/sideBar'; // Ensure the path is correct
import Navbar from '../components/Navbar'; // Ensure the path is correct

const ContactUs = ({ onLogout }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const handleToggleSidebar = (expanded) => {
    setSidebarExpanded(expanded);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic (e.g., sending data to an API or email service)
    // For now, just a success message
    setFormStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <section
      className={`bg-login flex ${styles.paddingY} h-screen w-full justify-center items-center`}
      style={{
        backgroundImage: `url(${Vector})`,
        backgroundSize: '80%',
        backgroundPosition: 'right 50%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Sidebar Section */}
      <div className={`transition-all duration-300 ${sidebarExpanded ? 'w-64' : 'w-20'}`}>
        <Sidebar onToggle={handleToggleSidebar} expanded={sidebarExpanded} onLogout={onLogout} />
      </div>

      <div className="flex-1 flex justify-center items-center">
        {/* Navbar Section */}
        <div
          className={`fixed top-0 left-0 w-full z-10 bg-primary transition-all duration-300 ${sidebarExpanded ? 'ml-64' : 'ml-20'}`}
          style={{ width: `calc(100% - ${sidebarExpanded ? '16rem' : '5rem'})` }}
        >
          <Navbar />
        </div>

        {/* Centered Form Section */}
        <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg ">
          <h1 className="text-3xl font-bold text-primary mb-4 text-center">Contact Us</h1>
          <p className="text-lg mb-8 text-gray-600 text-center">We'd love to hear from you! Please fill out the form below.</p>

          {/* Contact Form */}
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-md"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-md"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-primary text-white font-semibold rounded-md hover:bg-[#872DFB]"
            >
              Send Message
            </button>
          </form>

          {/* Success or Error message */}
          {formStatus && (
            <div className="mt-6 p-4 text-center text-lg text-green-600">
              <p>{formStatus}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
