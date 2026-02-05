import React from 'react';
import { Link } from 'react-router-dom';

const Admissions: React.FC = () => {
  return (
    <div className="w-full bg-sandstone pb-20 pt-32">
      {/* Page Header */}
      <div className="bg-earth text-sandstone border-b border-earth/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade-in">How It Works</span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-hero-title">Planning Your Journey</h1>
          <p className="text-xl text-sandstone/80 max-w-2xl mx-auto animate-hero-text">
            From initial inquiry to your safe return, our booking process is designed to be seamless, transparent, and personalized.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Process Timeline */}
        <h2 className="text-2xl font-serif text-earth mb-8">Booking Process</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-sandstone/50">
          {[
            { step: 1, title: "Submit Inquiry", desc: "Fill out our bespoke inquiry form detailing your interests, dates, and group size." },
            { step: 2, title: "Consultation", desc: "A travel designer will contact you within 24 hours to refine your itinerary." },
            { step: 3, title: "Secure Permits", desc: "We secure non-refundable gorilla permits immediately upon deposit (30%)." },
            { step: 4, title: "Final Preparation", desc: "Receive your 'Know Before You Go' guide and final itinerary 30 days prior." }
          ].map((item, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-sandstone bg-forest text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-sm font-bold">{item.step}</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-sm shadow-sm border border-sandstone/20">
                <h3 className="font-bold font-serif text-earth mb-2">{item.title}</h3>
                <p className="text-earth/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif text-earth mb-6">Estimated Costs (2024-2025)</h2>
          <div className="overflow-hidden rounded-sm border border-sandstone/20 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-earth text-white font-bold">
                <tr>
                  <th className="px-6 py-4">Item</th>
                  <th className="px-6 py-4 text-right">Typical Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sandstone/20">
                {[
                  { item: "Gorilla Trekking Permit (RDB)", cost: "$1,500 / person" },
                  { item: "Luxury Lodge (Full Board)", cost: "$800 - $2,500 / night" },
                  { item: "Private 4x4 Transport", cost: "$250 - $350 / day" },
                  { item: "Community Activities", cost: "$30 - $100 / activity" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-sandstone/10 transition-colors">
                    <td className="px-6 py-4 text-earth font-medium">{row.item}</td>
                    <td className="px-6 py-4 text-right text-earth/70">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-earth/60 italic">* Prices are indicative and subject to seasonality and availability.</p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-forest rounded-sm p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <h2 className="text-3xl font-serif mb-4 relative z-10">Ready to start?</h2>
          <p className="text-sandstone/80 mb-8 max-w-xl mx-auto relative z-10">Spaces for gorilla trekking are limited. We recommend booking at least 6 months in advance.</p>
          <Link to="/booking" className="inline-block bg-white text-forest font-bold uppercase tracking-widest py-3 px-8 rounded-sm hover:bg-sandstone transition-colors relative z-10">
            Start Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admissions;