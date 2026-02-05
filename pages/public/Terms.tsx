import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="w-full bg-sandstone pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 bg-white p-12 shadow-sm rounded-sm">
        <h1 className="text-4xl font-serif text-earth mb-8">Terms of Service</h1>
        <p className="text-sm text-earth/60 mb-12">Last Updated: October 24, 2024</p>
        
        <div className="prose prose-stone max-w-none text-earth/80">
          <p>
            Please read these Terms of Service carefully before booking with Hill Travel Rwanda Tours. By booking a trip, you agree to these terms.
          </p>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">1. Booking & Deposits</h3>
          <p>
            A deposit of 30% is required to confirm your booking. The remaining balance is due 45 days prior to arrival. Gorilla permits must be paid in full at the time of booking to secure them.
          </p>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">2. Cancellations & Refunds</h3>
          <p>
            Cancellations must be made in writing.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>60+ days before arrival: Full refund less administrative fees.</li>
            <li>45-60 days before arrival: 50% refund.</li>
            <li>Less than 45 days: No refund.</li>
            <li>Gorilla permits are generally non-refundable per RDB regulations.</li>
          </ul>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">3. Travel Insurance</h3>
          <p>
            Comprehensive travel insurance is mandatory for all guests. It must cover medical emergencies, evacuation, and trip cancellation.
          </p>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">4. Health & Safety</h3>
          <p>
            Guests are responsible for meeting entry requirements (visas, vaccinations). Hill Travel is not liable for illness or injury during activities, though we prioritize safety with certified guides.
          </p>

          <h3 className="text-xl font-bold text-earth mt-8 mb-4">5. Force Majeure</h3>
          <p>
            Hill Travel is not liable for delays or cancellations caused by events beyond our control (natural disasters, political instability, etc.).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;