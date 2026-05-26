import React from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import MusicBackground from '../style/MusicBackground';
import { FaChevronLeft, FaPaperPlane } from 'react-icons/fa';

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
    <div className="min-h-screen text-neutral-350 p-6 flex flex-col justify-center items-center relative">
      {/* Premium Ambient Background */}
      <MusicBackground />

      {/* Navigation Return Button */}
      <div className="absolute top-6 left-6 z-30">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-[#181818] border border-neutral-800 text-neutral-400 hover:text-white hover:bg-[#282828] hover:scale-102 transition-all"
        >
          <FaChevronLeft size={10} /> Back Home
        </Link>
      </div>

      <div className="max-w-2xl bg-[#181818] border border-neutral-850 p-8 md:p-10 rounded-xl shadow-xl w-full text-neutral-250 z-20 my-12">
        <h1 className="text-3xl font-extrabold text-center text-white tracking-tight mb-2">
          Contact Us
        </h1>
        <p className="text-neutral-450 text-center mb-8 text-xs font-normal">
          Have feedback or technical questions? Let us know and we will get back to you shortly.
        </p>

        {sent ? (
          <div className="text-green-400 bg-green-950/20 border border-green-900/30 p-4 rounded-xl text-center font-bold text-sm mb-6">
            🎉 Message sent successfully!
          </div>
        ) : (
          <form
            className="space-y-5"
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
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] text-xs transition-all animate-none"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] text-xs transition-all animate-none"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Write your message here..."
                className="w-full px-4 py-2.5 bg-[#121212] border border-neutral-850 text-white rounded-lg placeholder-neutral-550 focus:outline-none focus:ring-1 focus:ring-[#1db954] text-xs transition-all animate-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold py-2.5 px-4 rounded-full transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
