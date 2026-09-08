import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { EVENT_TYPES, EVENT_BY_SLUG, eventsFor } from '../../utils/events';
import { relationLabel, NAME_MAP } from '../../utils/site';

const DESTINATIONS = Object.entries(NAME_MAP.destinations).map(([slug, name]) => ({ slug, name }));

const DRAFT_KEY = 'htr:booking-draft-v1';

interface BookingDraft {
  step: number;
  eventType: string;
  experience: string;
  destination: string;
  service: string;
  startDate: string;
  duration: string;
  adults: number;
  children: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests: string;
}

const readDraft = (): BookingDraft | null => {
  try {
    const raw = typeof window !== 'undefined' ? window.localStorage.getItem(DRAFT_KEY) : null;
    return raw ? (JSON.parse(raw) as BookingDraft) : null;
  } catch {
    return null;
  }
};

const Booking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const queryEvent = searchParams.get('event');
  const queryExperience = searchParams.get('experience');
  const queryDestination = searchParams.get('destination');
  const queryService = searchParams.get('service');
  const hasQuery = Boolean(queryEvent || queryExperience || queryDestination || queryService);

  const draft = !hasQuery ? readDraft() : null;

  const resolvedEvent = (() => {
    if (queryEvent && EVENT_BY_SLUG[queryEvent]) return queryEvent;
    if (queryExperience) {
      const derived = eventsFor('experiences', queryExperience)[0];
      if (derived) return derived.slug;
    }
    if (draft && EVENT_BY_SLUG[draft.eventType]) return draft.eventType;
    return 'wedding';
  })();

  const availableExperiences = EVENT_BY_SLUG[resolvedEvent].experiences as string[];

  const resolvedExperience = queryExperience
    ? (availableExperiences.includes(queryExperience) ? queryExperience : 'custom')
    : (draft?.experience ?? '');

  const resolvedDestination = queryDestination && DESTINATIONS.some((d) => d.slug === queryDestination)
    ? (queryDestination as string)
    : (draft?.destination ?? '');

  const resolvedService = queryService && NAME_MAP.services[queryService]
    ? queryService
    : (draft?.service ?? '');

  const [step, setStep] = useState(draft?.step ?? 1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [stepError, setStepError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    eventType: resolvedEvent,
    experience: resolvedExperience,
    destination: resolvedDestination,
    service: resolvedService,
    startDate: draft?.startDate ?? '',
    duration: draft?.duration ?? '',
    adults: draft?.adults ?? 2,
    children: draft?.children ?? 0,
    firstName: draft?.firstName ?? '',
    lastName: draft?.lastName ?? '',
    email: draft?.email ?? '',
    phone: draft?.phone ?? '',
    country: draft?.country ?? '',
    specialRequests: draft?.specialRequests ?? ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsError, setTermsError] = useState(false);

  // Persist a draft so a refresh does not lose entered data (skip the success screen)
  useEffect(() => {
    if (step === 4) return;
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ step, ...formData }));
    } catch {
      /* storage unavailable */
    }
  }, [formData, step]);

  const relatedExperiences = EVENT_BY_SLUG[formData.eventType].experiences as string[];
  const experienceDisplayName =
    formData.experience === 'custom'
      ? 'Custom / Bespoke Arrangement'
      : relatedExperiences.includes(formData.experience)
        ? relationLabel('experiences', formData.experience)
        : 'To be confirmed by our event designers';
  const serviceDisplayName = formData.service ? relationLabel('services', formData.service) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEventChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      eventType: value,
      experience: EVENT_BY_SLUG[value].experiences[0] ?? 'custom'
    }));
  };

  const validateStep = (): string | null => {
    if (step === 1 && !formData.startDate) {
      return "Please select a preferred event date to continue.";
    }
    if (step === 2) {
      if (!formData.firstName.trim() || !formData.lastName.trim()) return "Please provide your full name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address.";
      if (!formData.phone.trim()) return "Please provide a phone number.";
      if (!formData.country.trim()) return "Please provide your country of residence.";
    }
    return null;
  };

  const handleNext = () => {
    const error = validateStep();
    if (error) {
      setStepError(error);
      return;
    }
    setStepError(null);
    window.scrollTo(0, 0);
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStepError(null);
    window.scrollTo(0, 0);
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      setTermsError(true);
      return;
    }
    if (!formData.startDate) {
      setSubmitError("Please select a preferred event date.");
      return;
    }

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
          eventTypeName: EVENT_BY_SLUG[formData.eventType].name,
          experienceName: experienceDisplayName,
          serviceName: serviceDisplayName,
          _replyto: formData.email,
          _subject: `New Event Inquiry: ${EVENT_BY_SLUG[formData.eventType].name} - ${formData.firstName} ${formData.lastName}`
        })
      });

      if (response.ok) {
        try {
          window.localStorage.removeItem(DRAFT_KEY);
        } catch {
          /* storage unavailable */
        }
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
          <span className="text-forest font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Event Inquiries</span>
          <h1 className="text-4xl md:text-5xl font-serif text-earth mb-4">Start Planning Your Event</h1>
          <p className="text-earth/70 max-w-lg mx-auto">
            Choose your occasion and share the essentials — our event designers will respond within 24 hours with a tailored, negotiable plan.
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
        <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-xl overflow-hidden border-t-4 border-forest">

          {stepError && (
            <div className="p-4 m-6 mb-0 bg-red-100 border border-red-300 text-red-700 text-sm rounded-sm">
              {stepError}
            </div>
          )}
          
          {/* Step 1: Event & Logistics */}
          {step === 1 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-serif text-earth mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-sage">celebration</span> 
                Your Occasion
              </h2>
              
              {formData.service && (
                <div className="p-4 bg-sandstone/40 border border-sandstone rounded-sm text-sm text-earth/80 mb-6">
                  Pairs with service: <span className="font-bold text-forest">{serviceDisplayName}</span>
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Event Type</label>
                  <select 
                    name="eventType" 
                    value={formData.eventType} 
                    onChange={(e) => handleEventChange(e.target.value)}
                    className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none cursor-pointer"
                  >
                    {EVENT_TYPES.map(event => (
                      <option key={event.slug} value={event.slug}>{event.name}</option>
                    ))}
                  </select>
                  <p className="text-xs text-earth/50 mt-2">{EVENT_BY_SLUG[formData.eventType].tagline}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Experience Options</label>
                    <select 
                      name="experience" 
                      value={formData.experience} 
                      onChange={handleChange}
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none cursor-pointer"
                    >
                      {relatedExperiences.map(slug => (
                        <option key={slug} value={slug}>{relationLabel('experiences', slug)}</option>
                      ))}
                      <option value="custom">Custom / Bespoke Arrangement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Preferred Destination</label>
                    <select 
                      name="destination" 
                      value={formData.destination} 
                      onChange={handleChange}
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none cursor-pointer"
                    >
                      <option value="">Let us decide</option>
                      {DESTINATIONS.map(d => (
                        <option key={d.slug} value={d.slug}>{d.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Preferred Date</label>
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
                      name="duration"
                      min="1"
                      max="30"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="e.g. 1"
                      className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Adults (12+)</label>
                    <div className="flex items-center">
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({...prev, adults: Math.max(1, prev.adults - 1)}))}
                        aria-label="Decrease adults"
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
                        type="button"
                         onClick={() => setFormData(prev => ({...prev, adults: Math.min(1000, prev.adults + 1)}))}
                         aria-label="Increase adults"
                         className="w-12 h-14 bg-earth text-white hover:bg-forest transition-colors flex items-center justify-center"
                      >+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Children (Under 12)</label>
                    <div className="flex items-center">
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({...prev, children: Math.max(0, prev.children - 1)}))}
                        aria-label="Decrease children"
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
                        type="button"
                         onClick={() => setFormData(prev => ({...prev, children: Math.min(1000, prev.children + 1)}))}
                         aria-label="Increase children"
                         className="w-12 h-14 bg-earth text-white hover:bg-forest transition-colors flex items-center justify-center"
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button type="button" onClick={handleNext} className="px-8 py-4 bg-earth text-white font-bold uppercase tracking-widest hover:bg-forest transition-colors shadow-lg flex items-center gap-2">
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
                Contact Details
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
                      required
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
                      required
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
                      required
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
                      required
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
                    required
                    className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Occasion Details / Special Requests</label>
                  <textarea 
                    name="specialRequests" 
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none resize-none"
                    placeholder="E.g. 240 guests, traditional ceremony, vegetarian menu, wheelchair access..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-10 flex justify-between items-center">
                <button type="button" onClick={handleBack} className="text-earth/60 font-bold uppercase tracking-widest text-xs hover:text-earth transition-colors">
                  Go Back
                </button>
                <button type="button" onClick={handleNext} className="px-8 py-4 bg-earth text-white font-bold uppercase tracking-widest hover:bg-forest transition-colors shadow-lg flex items-center gap-2">
                  Review Inquiry <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {step === 3 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-serif text-earth mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-sage">summarize</span> 
                Review Your Inquiry
              </h2>

              <div className="bg-sandstone/30 p-6 rounded-sm border border-sandstone mb-8">
                 <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-4">
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Event Type</span>
                          <p className="font-serif text-xl text-forest">{EVENT_BY_SLUG[formData.eventType].name}</p>
                       </div>
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Experience Options</span>
                          <p className="font-bold text-earth">{experienceDisplayName}</p>
                       </div>
                       {formData.service && (
                          <div>
                             <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Service / Add-on</span>
                             <p className="font-bold text-earth">{serviceDisplayName}</p>
                          </div>
                       )}
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Preferred Destination</span>
                          <p className="font-bold text-earth">{formData.destination ? relationLabel('destinations', formData.destination) : 'Let us decide'}</p>
                       </div>
                    </div>
                    <div className="flex-1 space-y-4">
                       <div>
                          <span className="block text-xs font-bold text-earth/50 uppercase tracking-wider">Event Dates</span>
                          <p className="font-bold text-earth">{formData.startDate || 'TBD'}{formData.duration ? ` · ${formData.duration} days` : ''}</p>
                       </div>
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

              <p className="text-sm text-earth/60 mb-6">
                No fixed prices — our designers will send you a tailored, negotiable plan based on your guest count, season, and choices above.
              </p>

              <div className="flex items-center gap-3 mb-8">
                 <input 
                   type="checkbox" 
                   id="terms" 
                   required
                   checked={termsAccepted}
                   onChange={(e) => { setTermsAccepted(e.target.checked); setTermsError(false); }}
                   className="w-5 h-5 text-forest focus:ring-forest border-gray-300 rounded" 
                 />
                 <label htmlFor="terms" className="text-sm text-earth/80">I agree to the <Link to="/terms" className="underline hover:text-forest">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-forest">Privacy Policy</Link>.</label>
              </div>

              {termsError && (
                 <div className="p-4 mb-6 bg-red-100 border border-red-300 text-red-700 text-sm rounded-sm">
                   Please accept the Terms of Service and Privacy Policy to continue.
                 </div>
              )}

              {submitError && (
                 <div className="p-4 mb-6 bg-red-100 border border-red-300 text-red-700 text-sm rounded-sm">
                   {submitError}
                 </div>
              )}

              <div className="flex justify-between items-center">
                <button 
                  type="button"
                  onClick={handleBack} 
                  disabled={isSubmitting}
                  className="text-earth/60 font-bold uppercase tracking-widest text-xs hover:text-earth transition-colors disabled:opacity-50"
                >
                  Make Changes
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`px-10 py-4 bg-forest text-white font-bold uppercase tracking-widest hover:bg-forest-light transition-colors shadow-xl flex items-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Processing...' : 'Send Inquiry'}
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
              <h2 className="text-4xl font-serif text-earth mb-4">Inquiry Received!</h2>
              <p className="text-lg text-earth/70 max-w-md mx-auto mb-10 leading-relaxed">
                Thank you, {formData.firstName}. We have received your inquiry for your <span className="text-forest font-bold">{EVENT_BY_SLUG[formData.eventType].name}</span>.
                <br/><br/>
                An event designer will contact you at {formData.email} within 24 hours to discuss dates, venues, and a tailored plan.
              </p>
              <Link to="/events" className="inline-block px-8 py-3 border border-forest text-forest font-bold uppercase tracking-widest hover:bg-forest hover:text-white transition-colors mb-4 mr-3">
                More Event Types
              </Link>
              <Link to="/" className="inline-block px-8 py-3 border border-earth text-earth font-bold uppercase tracking-widest hover:bg-earth hover:text-white transition-colors">
                Return Home
              </Link>
            </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default Booking;