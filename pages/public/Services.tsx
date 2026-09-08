import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';
import { SERVICE_LIST } from '../../content/services';

const Services: React.FC = () => {
  const services = SERVICE_LIST;

  return (
    <div className="w-full bg-sandstone">
      {/* Hero Header */}
      <div className="relative pt-32 pb-20 px-6 bg-earth text-sandstone">
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute inset-0 bg-black/30 z-10"></div>
           <ImageWithFallback src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg/3840px-Launch_of_the_Environment_Week_2017-_Umuganda_at_Nyandungu_Wetland_-_34961808125.jpg" className="w-full h-full object-cover opacity-40 grayscale" alt="Service Texture" />
        </div>
        <div className="max-w-7xl mx-auto relative z-20 text-center">
          <span className="text-sage font-bold text-xs uppercase tracking-[0.2em] mb-4 block animate-fade-in">What We Do</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 animate-hero-title">Our Services</h1>
          <p className="max-w-2xl mx-auto text-lg text-sandstone/90 font-light animate-hero-text">
            From the moment you touch down in Kigali to your final farewell, we handle every detail with precision, passion, and a commitment to sustainability.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border-t-4 border-transparent hover:border-forest flex flex-col h-full">
              <div className="w-16 h-16 bg-sandstone rounded-full flex items-center justify-center mb-6 text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-serif text-earth mb-4">{service.title}</h3>
              <p className="text-earth/70 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              <Link 
                to={`/services/${service.slug}`}
                className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-forest hover:text-earth transition-colors mt-auto"
              >
                Learn More <span className="material-symbols-outlined text-sm ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-forest text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Need something specific?</h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Our team of travel designers specializes in making the impossible possible. 
            Contact us for helicopter transfers, private chef services, or exclusive access permits.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-sandstone text-forest font-bold rounded-sm hover:bg-white transition-colors uppercase tracking-widest text-sm">
            Contact Concierge
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;