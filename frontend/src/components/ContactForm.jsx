import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setResponseMessage(response.data.message);
      setError('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send your message. Please try again.');
      setResponseMessage('');
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none"
          >
            Send Message
          </button>
        </form>
        {responseMessage && <p className="mt-4 text-green-500">{responseMessage}</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
