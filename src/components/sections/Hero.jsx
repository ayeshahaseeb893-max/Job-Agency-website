import React from 'react';
import { Search, MapPin } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-16 md:pt-24 pb-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Find the Right <span className="text-blue-600">Talent</span> for Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Connect with vetted professionals from around the world. Streamline your hiring process and build your dream team today.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white p-2 md:p-3 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-3 max-w-2xl mx-auto lg:mx-0">
              <div className="flex-1 flex items-center bg-gray-50 px-4 rounded-xl border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-colors">
                <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="w-full bg-transparent border-none py-3 px-3 text-gray-700 outline-none placeholder-gray-400"
                />
              </div>
              <div className="flex-1 flex items-center bg-gray-50 px-4 rounded-xl border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-colors">
                <MapPin className="text-gray-400 w-5 h-5 flex-shrink-0" />
                <input 
                  type="text" 
                  placeholder="City, state, or zip code" 
                  className="w-full bg-transparent border-none py-3 px-3 text-gray-700 outline-none placeholder-gray-400"
                />
              </div>
              <Button size="lg" className="w-full md:w-auto h-12 md:h-auto rounded-xl">
                Search
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <span className="text-sm text-gray-500 flex items-center justify-center">Popular: Designer, Developer, Product Manager</span>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-10 translate-y-10"></div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transform transition hover:-translate-y-2 duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Team working together" 
                 className="w-full h-auto object-cover"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
