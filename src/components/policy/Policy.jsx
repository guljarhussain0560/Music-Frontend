import React from 'react';
import { Link } from 'react-router-dom';
import MusicBackground from '../style/MusicBackground';
import { FaChevronLeft } from 'react-icons/fa';

const Policy = () => {
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

      <div className="max-w-3xl bg-[#181818] border border-neutral-850 p-8 md:p-10 rounded-xl shadow-xl w-full text-neutral-300 z-20 my-12">
        <h1 className="text-3xl font-extrabold text-center text-white tracking-tight mb-1">
          Privacy Policy
        </h1>
        <p className="text-neutral-500 italic text-center mb-8 text-[11px] font-bold uppercase tracking-wider">
          Last Updated: May 07, 2025
        </p>

        <div className="space-y-6 text-xs text-neutral-450 leading-relaxed font-light text-justify">
          <p>
            Welcome to Music Vibes! We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services ("Services"). By using our Services, you agree to the terms of this Privacy Policy.
          </p>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              1. Information We Collect
            </h2>
            <p className="space-y-1">
              We may collect: <br />
              - <strong className="text-white font-semibold">Personal Information</strong>: Name, email address, username. <br />
              - <strong className="text-white font-semibold">Uploaded Content</strong>: Images you upload to discover new music vibes. <br />
              - <strong className="text-white font-semibold">Usage Data</strong>: IP address, browser type, device information, pages visited. <br />
              - <strong className="text-white font-semibold">Cookies</strong>: Used to enhance your experience; manageable via browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              2. How We Use Your Information
            </h2>
            <p className="space-y-1">
              We use your information to: <br />
              - Provide and improve Services (e.g., music recommendations). <br />
              - Communicate updates or promotions (opt-out available). <br />
              - Analyze usage and troubleshoot issues. <br />
              - Comply with legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              3. How We Share Your Information
            </h2>
            <p className="space-y-1">
              We do not sell your information. We may share it with: <br />
              - <strong className="text-white font-semibold">Service Providers</strong>: Trusted third parties under confidentiality agreements. <br />
              - <strong className="text-white font-semibold">Legal Requirements</strong>: To comply with laws or court orders. <br />
              - <strong className="text-white font-semibold">Protection of Rights</strong>: To ensure safety and protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              4. Data Security
            </h2>
            <p>
              We use encryption (TLS/SSL) and access controls to protect your data. However, no method of transmission or electronic storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              5. Third-Party Links
            </h2>
            <p>
              Our Services may link to third-party sites. We are not responsible for the privacy practices or contents of those external websites.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              6. Your Rights and Choices
            </h2>
            <p className="space-y-1">
              - Access or update your information via your account. <br />
              - Opt out of promotional emails. <br />
              - Disable cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              7. Children's Privacy
            </h2>
            <p>
              Our Services are not for children under 13. We will delete their data if we detect we have collected it.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold text-neutral-200 border-b border-neutral-800 pb-2 mb-2.5 uppercase tracking-wide">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this policy. Changes will be posted here with the updated date at the top of the policy page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;