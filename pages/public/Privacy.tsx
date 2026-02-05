import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="w-full bg-sandstone pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 bg-white p-12 shadow-sm rounded-sm">
        <h1 className="text-4xl font-serif text-earth mb-8">Privacy Policy</h1>
        <p className="text-sm text-earth/60 mb-12">Last Updated: October 24, 2024</p>
        
        <div className="prose prose-stone max-w-none text-earth/80">
          <p>
            At Hill Travel Rwanda Tours, we value your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information.
          </p>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">1. Information We Collect</h3>
          <p>
            We collect information you provide directly to us when booking a tour, subscribing to our newsletter, or contacting us. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Name, email address, phone number, and passport details (for permits).</li>
            <li>Travel preferences and dietary requirements.</li>
            <li>Payment information (processed securely via third-party providers).</li>
          </ul>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">2. How We Use Your Information</h3>
          <p>
            We use your data to:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Process bookings and secure permits (e.g., RDB Gorilla Trekking permits).</li>
            <li>Communicate with you regarding your itinerary.</li>
            <li>Improve our services and website experience.</li>
          </ul>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">3. Data Sharing</h3>
          <p>
            We do not sell your data. We only share necessary information with:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Accommodations and transport providers involved in your trip.</li>
            <li>Government authorities for permit issuance.</li>
          </ul>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">4. Security</h3>
          <p>
            We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">5. Contact Us</h3>
          <p>
            If you have questions about this policy, please contact us at info@hilltravelrwanda.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;