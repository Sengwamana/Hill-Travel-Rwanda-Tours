import React, { useState } from 'react';
import ImageWithFallback from '../../components/ImageWithFallback';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'bespoke',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/xvzbpbqj", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify({
           ...formData,
           subject: `New Contact Inquiry: ${formData.type} - ${formData.name}`
         })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', type: 'bespoke', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-sandstone pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Section */}
          <div className="space-y-12">
            <div>
              <span className="text-forest font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Get in Touch</span>
              <h1 className="text-5xl md:text-6xl font-serif text-earth mb-6">Start Your Journey</h1>
              <p className="text-lg text-earth/70 leading-relaxed max-w-md">
                Whether you're ready to book or just dreaming of Rwanda, our team is here to craft your perfect itinerary.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-full bg-white border border-sandstone/20 flex items-center justify-center text-forest shrink-0">
                    <span className="material-symbols-outlined">location_on</span>
                 </div>
                 <div>
                    <h3 className="font-serif text-xl text-earth mb-2">Visit Our Office</h3>
                    <p className="text-earth/70">Kigali Heights, 4th Floor<br/>KG 7 Ave, Kigali, Rwanda</p>
                 </div>
              </div>

              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-full bg-white border border-sandstone/20 flex items-center justify-center text-forest shrink-0">
                    <span className="material-symbols-outlined">call</span>
                 </div>
                 <div>
                    <h3 className="font-serif text-xl text-earth mb-2">Call Us</h3>
                    <p className="text-earth/70">+250 788 123 456<br/>Mon-Fri, 8am - 6pm CAT</p>
                 </div>
              </div>

              <div className="flex gap-6 items-start">
                 <div className="w-12 h-12 rounded-full bg-white border border-sandstone/20 flex items-center justify-center text-forest shrink-0">
                    <span className="material-symbols-outlined">mail</span>
                 </div>
                 <div>
                    <h3 className="font-serif text-xl text-earth mb-2">Email</h3>
                    <p className="text-earth/70">info@hilltravelrwanda.com<br/>bookings@hilltravelrwanda.com</p>
                 </div>
              </div>
            </div>

            <div className="p-8 bg-forest text-white rounded-sm mt-12">
               <h3 className="font-serif text-2xl mb-2">Agent Partnerships</h3>
               <p className="text-sandstone/80 text-sm mb-4">We collaborate with luxury travel agents worldwide.</p>
               <button className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-sage hover:border-sage transition-colors">
                 Partner With Us
               </button>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm relative overflow-hidden">
             <h2 className="text-3xl font-serif text-earth mb-8">Trip Inquiry</h2>
             
             {status === 'success' ? (
                <div className="bg-sage/20 border border-sage p-6 rounded-sm text-center animate-fade-in my-8">
                  <div className="w-12 h-12 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-2xl">check</span>
                  </div>
                  <h3 className="text-xl font-serif text-earth mb-2">Message Sent!</h3>
                  <p className="text-earth/80 text-sm">Thank you for contacting us. We will respond to your inquiry within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-xs font-bold uppercase tracking-widest text-forest underline hover:text-earth"
                  >
                    Send Another Message
                  </button>
                </div>
             ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                   <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Full Name</label>
                   <input 
                     type="text" 
                     id="name" 
                     name="name" 
                     required
                     value={formData.name}
                     className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none transition-colors"
                     placeholder="Jane Doe"
                     onChange={handleChange}
                     disabled={status === 'submitting'}
                   />
                </div>

                <div>
                   <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Email Address</label>
                   <input 
                     type="email" 
                     id="email" 
                     name="email" 
                     required
                     value={formData.email}
                     className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none transition-colors"
                     placeholder="jane@example.com"
                     onChange={handleChange}
                     disabled={status === 'submitting'}
                   />
                </div>

                <div>
                   <label htmlFor="type" className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Interest Type</label>
                   <select 
                     id="type" 
                     name="type" 
                     value={formData.type}
                     className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none transition-colors appearance-none"
                     onChange={handleChange}
                     disabled={status === 'submitting'}
                   >
                      <option value="bespoke">Bespoke Itinerary Planning</option>
                      <option value="gorilla">Gorilla Trekking Permit</option>
                      <option value="community">Community/Cultural Tour</option>
                      <option value="corporate">Corporate Retreat</option>
                   </select>
                </div>

                <div>
                   <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-earth/60 mb-2">Tell us about your dream trip</label>
                   <textarea 
                     id="message" 
                     name="message" 
                     rows={5}
                     value={formData.message}
                     className="w-full bg-sandstone/30 border border-sandstone focus:border-forest focus:ring-0 p-4 text-earth outline-none transition-colors resize-none"
                     placeholder="Preferred dates, group size, special interests..."
                     onChange={handleChange}
                     disabled={status === 'submitting'}
                   ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-200 text-red-700 text-sm rounded-sm">
                    There was an error sending your message. Please try again later.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full py-4 bg-earth text-white font-bold uppercase tracking-widest hover:bg-forest transition-colors shadow-lg mt-4 flex justify-center items-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : 'Send Inquiry'}
                </button>
             </form>
             )}
          </div>

        </div>
      </div>

      {/* Map Placeholder */}
      <div className="h-96 w-full bg-gray-200 relative">
        <ImageWithFallback src="https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" alt="Map Location" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-white px-6 py-3 shadow-xl rounded-full flex items-center gap-2">
             <span className="material-symbols-outlined text-forest">pin_drop</span>
             <span className="font-serif font-bold text-earth">Kigali Heights, Rwanda</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;