import React from 'react';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../../components/ImageWithFallback';

const Athletics: React.FC = () => {
  return (
    <div className="w-full bg-sandstone">
      {/* Hero */}
      <div className="relative h-[480px] bg-earth flex items-center justify-center">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" 
          alt="Sports Field" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="inline-block px-4 py-1 mb-4 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md animate-fade-in">Active Travel</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 drop-shadow-lg animate-hero-title">Wellness & Adventure</h1>
          <p className="text-xl text-sandstone/90 font-light max-w-2xl mx-auto drop-shadow-md animate-hero-text">
            Recharge your spirit in the heart of Africa. From high-altitude trail running to yoga overlooking the Virungas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Featured Activities */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif text-earth">Active Pursuits</h2>
            <Link to="/experiences" className="text-forest font-bold text-xs uppercase tracking-widest hover:underline flex items-center">
              View All Experiences <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Congo Nile Trail", type: "Cycling / Hiking", status: "Multiday", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop", icon: "directions_bike" },
              { name: "Lake Kivu Kayak", type: "Water Sports", status: "Sunset Tours", img: "https://images.unsplash.com/photo-1574629810360-7efbbe4384d4?q=80&w=2060&auto=format&fit=crop", icon: "kayaking" },
              { name: "Mt. Bisoke Hike", type: "Trekking", status: "Day Trip", img: "https://images.unsplash.com/photo-1552674605-4694042ca026?q=80&w=2074&auto=format&fit=crop", icon: "hiking" },
            ].map((activity, i) => (
              <div key={i} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback src={activity.img} alt={activity.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <span className="absolute top-4 left-4 bg-white/90 text-forest text-[10px] font-bold uppercase tracking-widest px-3 py-1">{activity.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-earth mb-1">{activity.name}</h3>
                  <p className="text-sm text-earth/60 mb-4">{activity.status}</p>
                  <div className="flex justify-end">
                    <span className="material-symbols-outlined text-forest/50 group-hover:text-forest transition-colors">{activity.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border-t-4 border-sage">
           <h2 className="text-2xl font-serif text-earth mb-8">Scheduled Group Departures</h2>
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-sandstone/30 border-b border-sandstone">
                  <tr>
                    <th className="px-6 py-4 font-bold text-earth/60 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 font-bold text-earth/60 uppercase tracking-wider">Activity</th>
                    <th className="px-6 py-4 font-bold text-earth/60 uppercase tracking-wider">Difficulty</th>
                    <th className="px-6 py-4 font-bold text-earth/60 uppercase tracking-wider text-right">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sandstone/20">
                  {[
                    { date: "Nov 15, 2024", activity: "Karisimbi Volcano Hike (2 Days)", diff: "Strenuous", spots: "4 Spots Left" },
                    { date: "Dec 01, 2024", activity: "Cycling the Nile Trail", diff: "Moderate", spots: "Open" },
                    { date: "Dec 10, 2024", activity: "Yoga Retreat @ Lake Kivu", diff: "Easy", spots: "Waitlist" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-sandstone/10 transition-colors">
                      <td className="px-6 py-4 font-bold text-earth">{row.date}</td>
                      <td className="px-6 py-4 text-earth">{row.activity}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm ${row.diff === 'Strenuous' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                          {row.diff}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-forest">{row.spots}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Athletics;