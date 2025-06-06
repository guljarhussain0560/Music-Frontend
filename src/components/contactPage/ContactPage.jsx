import React from 'react';
import api from '../services/api';

const ContactPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await api.post('/contact', data);
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex justify-center items-center">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-center mb-8">
          We'd love to hear from you! Whether you have questions, feedback, or collaboration ideas, feel free to reach out.
        </p>

        {sent ? (
          <div className="text-green-600 text-center font-semibold text-lg mb-6 animate-bounce">
            🎉 Message sent successfully!
          </div>
        ) : (
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              setSending(true);
              setSent(false);
              try {
                await handleSubmit(e);
                setSent(true);
                e.target.reset();
              } finally {
                setSending(false);
              }
            }}
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 hover:shadow-lg cursor-pointer flex items-center justify-center ${
                sending ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
              disabled={sending}
            >
              {sending ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
