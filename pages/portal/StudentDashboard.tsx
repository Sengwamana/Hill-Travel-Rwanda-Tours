import React from 'react';
import ImageWithFallback from '../../components/ImageWithFallback';

const StudentDashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl font-serif text-earth">Murakaza Neza, Alex!</h1>
          <p className="text-earth/60 font-medium">Your journey to Rwanda begins in 14 days.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-6 py-3 bg-forest text-white font-bold uppercase tracking-widest text-xs rounded-sm shadow-lg hover:bg-forest-light transition-colors">
             Download Itinerary
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-sm shadow-sm border-t-4 border-forest">
            <h3 className="font-serif text-xl text-earth mb-4">Trip Summary</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sandstone flex items-center justify-center text-forest">
                     <span className="material-symbols-outlined text-sm">calendar_month</span>
                  </div>
                  <div>
                     <p className="text-xs text-earth/50 uppercase font-bold">Dates</p>
                     <p className="text-earth font-bold text-sm">Nov 12 - Nov 22, 2024</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sandstone flex items-center justify-center text-forest">
                     <span className="material-symbols-outlined text-sm">group</span>
                  </div>
                  <div>
                     <p className="text-xs text-earth/50 uppercase font-bold">Travelers</p>
                     <p className="text-earth font-bold text-sm">2 Adults</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sandstone flex items-center justify-center text-forest">
                     <span className="material-symbols-outlined text-sm">confirmation_number</span>
                  </div>
                  <div>
                     <p className="text-xs text-earth/50 uppercase font-bold">Booking Ref</p>
                     <p className="text-earth font-bold text-sm">#HTR-8829</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-sage/10 p-6 rounded-sm border border-sage/20">
             <h3 className="font-bold text-earth mb-2 flex items-center gap-2">
               <span className="material-symbols-outlined text-forest">eco</span> Impact Score
             </h3>
             <p className="text-sm text-earth/70 mb-4">Your trip is 100% carbon offset. You've contributed to planting 12 trees in Gishwati Forest.</p>
             <div className="w-full bg-white rounded-full h-2 mb-1">
                <div className="bg-forest h-2 rounded-full" style={{ width: '100%' }}></div>
             </div>
             <span className="text-xs text-forest font-bold uppercase">Offset Complete</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
           <h3 className="font-serif text-2xl text-earth">Upcoming Highlights</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group bg-white p-0 rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-all">
                 <div className="h-32 overflow-hidden relative">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1534008779836-39df8546b404?q=80&w=1932&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Gorillas" />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-forest">Day 3</div>
                 </div>
                 <div className="p-4">
                    <h4 className="font-bold text-earth mb-1">Gorilla Trekking</h4>
                    <p className="text-xs text-earth/60 mb-2">Volcanoes National Park</p>
                    <span className="text-xs font-bold text-forest uppercase tracking-widest flex items-center gap-1">
                       <span className="material-symbols-outlined text-sm">check_circle</span> Permit Secured
                    </span>
                 </div>
              </div>

              <div className="group bg-white p-0 rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-all">
                 <div className="h-32 overflow-hidden relative">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Coffee" />
                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-forest">Day 6</div>
                 </div>
                 <div className="p-4">
                    <h4 className="font-bold text-earth mb-1">Crop to Cup Tour</h4>
                    <p className="text-xs text-earth/60 mb-2">Lake Kivu</p>
                    <span className="text-xs font-bold text-forest uppercase tracking-widest flex items-center gap-1">
                       <span className="material-symbols-outlined text-sm">check_circle</span> Confirmed
                    </span>
                 </div>
              </div>
           </div>

           <div className="bg-white p-6 rounded-sm shadow-sm">
              <h3 className="font-serif text-lg text-earth mb-4">Pending Actions</h3>
              <div className="space-y-3">
                 <div className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-sm">
                    <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-red-500">warning</span>
                       <span className="text-sm text-earth font-medium">Upload Passport Copy</span>
                    </div>
                    <button className="text-xs font-bold text-red-600 uppercase underline">Upload</button>
                 </div>
                 <div className="flex items-center justify-between p-3 bg-sandstone/30 border border-sandstone/50 rounded-sm">
                    <div className="flex items-center gap-3">
                       <span className="material-symbols-outlined text-earth/50">restaurant</span>
                       <span className="text-sm text-earth font-medium">Confirm Dietary Preferences</span>
                    </div>
                    <button className="text-xs font-bold text-forest uppercase underline">Review</button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;