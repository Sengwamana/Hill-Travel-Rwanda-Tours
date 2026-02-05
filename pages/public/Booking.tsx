import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    experience: 'gorilla-trek-3day',
    startDate: '',
    adults: 2,
    children: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: ''
  });

  const experiences = [
    { id: 'gorilla-trek-3day', name: '3-Day Gorilla Trekking Expedition', price: '$1,500' },
    { id: 'akagera-safari-2day', name: '2-Day Akagera Wildlife Safari', price: '$850' },
    { id: 'nyungwe-canopy', name: 'Nyungwe Primate & Canopy Tour', price: '$600' },
    { id: 'kivu-leisure', name: 'Lake Kivu Leisure & Coffee Experience', price: '$450' },
    { id: 'complete-rwanda-10day', name: '10-Day Complete Rwanda Circuit', price: '$4,200' },
    { id: 'custom', name: 'Custom / Bespoke Itinerary', price: 'Varies' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    window.scrollTo(0, 0);
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/xwvnenvg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          // Add readable experience name for the email notification
          experienceName: experiences.find(e => e.id === formData.experience)?.name || formData.experience,
          subject: `New Booking Request: ${formData.firstName} ${formData.lastName}`
        })
      });

      if (response.ok) {
        setStep(4);
        window.scrollTo(0, 0);
      } else {
        const data = await response.json();
        setSubmitError(data.error || "There was a problem submitting your request.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-sandstone min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-forest font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Reservations</span>
          <h1 className="text-4xl md:text-5xl font-serif text-earth mb-4">Secure Your Journey</h1>
          <p className="text-earth/70 max-w-lg mx-auto">
            Complete the form below to initiate your booking request. Our team will review availability and confirm within 24 hours.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-12 max-w-xl mx-auto relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
          <div className={`absolute top-1/2 left-0 h-0.5 bg-forest -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
          
          {[1, 2, 3].map((s) => (
            <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= s ? 'bg-forest text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-200'}`}>
              {step > s ? <span className="material-symbols-outlined text-lg">check</span> : s}
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-sm shadow-xl overflow-hidden border-t-4 border-forest">
          
          {/* Step 1: Experience & Logistics */}
          {step === 1 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-serif text-earth mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-sage">travel_explore</span> 
                Select Your Experience
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Choose Itinerary</label>
                  <select 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleChange}
                    className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none cursor-pointer"
                  >
                    {experiences.map(exp => (
                      <option key={exp.id} value={exp.id}>{exp.name} ({exp.price})</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Preferred Start Date</label>
                    <input 
                      type="date" 
                      name="startDate" 
                      value={formData.startDate} 
                      onChange={handleChange}
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Duration (Days)</label>
                    <input 
                      type="number" 
                      min="1"
                      placeholder="e.g. 5"
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Adults (12+)</label>
                    <div className="flex items-center">
                      <button 
                        onClick={() => setFormData(prev => ({...prev, adults: Math.max(1, prev.adults - 1)}))}
                        className="w-12 h-14 bg-earth text-white hover:bg-forest transition-colors flex items-center justify-center"
                      >-</button>
                      <input 
                        type="number" 
                        name="adults" 
                        value={formData.adults} 
                        readOnly
                        className="w-full text-center bg-sandstone/30 border-y border-sandstone h-14 text-earth font-bold outline-none"
                      />
                      <button 
                         onClick={() => setFormData(prev => ({...prev, adults: prev.adults + 1}))}
                         className="w-12 h-14 bg-earth text-white hover:bg-forest transition-colors flex items-center justify-center"
                      >+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Children (Under 12)</label>
                    <div className="flex items-center">
                      <button 
                        onClick={() => setFormData(prev => ({...prev, children: Math.max(0, prev.children - 1)}))}
                        className="w-12 h-14 bg-earth text-white hover:bg-forest transition-colors flex items-center justify-center"
                      >-</button>
                      <input 
                        type="number" 
                        name="children" 
                        value={formData.children} 
                        readOnly
                        className="w-full text-center bg-sandstone/30 border-y border-sandstone h-14 text-earth font-bold outline-none"
                      />
                      <button 
                         onClick={() => setFormData(prev => ({...prev, children: prev.children + 1}))}
                         className="w-12 h-14 bg-earth text-white hover:bg-forest transition-colors flex items-center justify-center"
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button onClick={handleNext} className="px-8 py-4 bg-earth text-white font-bold uppercase tracking-widest hover:bg-forest transition-colors shadow-lg flex items-center gap-2">
                  Next Step <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Guest Details */}
          {step === 2 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-serif text-earth mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-sage">person</span> 
                Guest Information
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange}
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Country of Residence</label>
                  <input 
                    type="text" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange}
                    className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Special Requests / Dietary Needs</label>
                  <textarea 
                    name="specialRequests" 
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none resize-none"
                    placeholder="E.g. Vegetarian meals, ground floor room required..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button onClick={handleBack} className="text-earth/60 font-bold uppercase tracking-widest text-xs hover:text-earth transition-colors">
                  Go Back
                </button>
                <button onClick={handleNext} className="px-8 py-4 bg-earth text-white font-bold uppercase tracking-widest hover:bg-forest transition-colors shadow-lg flex items-center gap-2">
                  Review Booking <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {step === 3 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-serif text-earth mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-sage">summarize</span> 
                Review Your Request
              </h2>

              <div className="bg-sandstone/30 p-6 rounded-sm border border-sandstone mb-8">
                 <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Experience</span>
                          <p className="font-serif text-xl text-forest">{experiences.find(e => e.id === formData.experience)?.name}</p>
                       </div>
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Travel Dates</span>
                          <p className="font-bold text-earth">{formData.startDate || 'TBD'}</p>
                       </div>
                    </div>
                    <div className="flex-1 space-y-4">
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Guests</span>
                          <p className="font-bold text-earth">{formData.adults} Adults, {formData.children} Children</p>
                       </div>
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Contact</span>
                          <p className="font-bold text-earth">{formData.firstName} {formData.lastName}</p>
                          <p className="text-sm text-earth/70">{formData.email}</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                 <input type="checkbox" id="terms" className="w-5 h-5 text-forest focus:ring-forest border-gray-300 rounded" />
                 <label htmlFor="terms" className="text-sm text-earth/80">I agree to the <Link to="/terms" className="underline hover:text-forest">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-forest">Privacy Policy</Link>.</label>
              </div>

              {submitError && (
                 <div className="p-4 mb-6 bg-red-100 border border-red-300 text-red-700 text-sm rounded-sm">
                   {submitError}
                 </div>
              )}

              <div className="flex justify-between items-center">
                <button 
                  onClick={handleBack} 
                  disabled={isSubmitting}
                  className="text-earth/60 font-bold uppercase tracking-widest text-xs hover:text-earth transition-colors disabled:opacity-50"
                >
                  Make Changes
                </button>
                <button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className={`px-10 py-4 bg-forest text-white font-bold uppercase tracking-widest hover:bg-forest-light transition-colors shadow-xl flex items-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Request'}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="p-12 md:p-20 text-center animate-fade-in">
              <div className="w-24 h-24 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-8 text-forest">
                <span className="material-symbols-outlined text-6xl">verified</span>
              </div>
              <h2 className="text-4xl font-serif text-earth mb-4">Request Received!</h2>
              <p className="text-lg text-earth/70 max-w-md mx-auto mb-10 leading-relaxed">
                Thank you, {formData.firstName}. We have received your booking inquiry for the <span className="text-forest font-bold">{experiences.find(e => e.id === formData.experience)?.name}</span>.
                <br/><br/>
                A travel designer will contact you at {formData.email} within 24 hours to finalize details and payment.
              </p>
              <Link to="/" className="inline-block px-8 py-3 border border-forest text-forest font-bold uppercase tracking-widest hover:bg-forest hover:text-white transition-colors">
                Return Home
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Booking;