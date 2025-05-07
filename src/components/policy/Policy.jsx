import React from 'react';

const Policy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6 flex justify-center items-center">
            <div className="max-w-3xl bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
                <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
                    Privacy Policy for Music Vibes
                </h1>
                <p className="text-gray-500 italic mb-6 text-center">
                    Last Updated: May 07, 2025
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Welcome to Music Vibes! We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services ("Services"). By using our Services, you agree to the terms of this Privacy Policy.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    We may collect: <br />
                    - <strong>Personal Information</strong>: Name, email address, username. <br />
                    - <strong>Uploaded Content</strong>: Images you upload to discover new music vibes. <br />
                    - <strong>Usage Data</strong>: IP address, browser type, device information, pages visited. <br />
                    - <strong>Cookies</strong>: Used to enhance your experience; manageable via browser settings.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    We use your information to: <br />
                    - Provide and improve Services (e.g., music recommendations). <br />
                    - Communicate updates or promotions (opt-out available). <br />
                    - Analyze usage and troubleshoot issues. <br />
                    - Comply with legal obligations.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    3. How We Share Your Information
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    We do not sell your information. We may share it with: <br />
                    - <strong>Service Providers</strong>: Trusted third parties under confidentiality agreements. <br />
                    - <strong>Legal Requirements</strong>: To comply with laws or court orders. <br />
                    - <strong>Protection of Rights</strong>: To ensure safety and protect our rights.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    4. Data Security
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    We use encryption (TLS/SSL) and access controls to protect your data. However, no method is 100% secure.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    5. Third-Party Links
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Our Services may link to third-party sites. We are not responsible for their privacy practices.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    6. Your Rights and Choices
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    - Access or update your information via your account. <br />
                    - Opt out of promotional emails. <br />
                    - Disable cookies in your browser settings.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    7. Children's Privacy
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Our Services are not for children under 13. We will delete their data if collected.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                    8. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    We may update this policy. Changes will be posted here with the updated date.
                </p>
            </div>
        </div>
    );
};

export default Policy;