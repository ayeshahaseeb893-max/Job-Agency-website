import React from 'react';
import Button from '../ui/Button';

const CTA = () => {
  return (
    <section className="relative py-24 bg-blue-600 overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to hire the best talent?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of companies who have successfully built their dream teams with TalentSync. Start hiring today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-20">
          <Button size="lg" className="w-full sm:w-auto !bg-white !text-blue-600 hover:!bg-gray-50 !border-transparent shadow-xl">
            Start Hiring Now
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white! text-white! hover:!bg-blue-500 !bg-transparent backdrop-blur-sm">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
