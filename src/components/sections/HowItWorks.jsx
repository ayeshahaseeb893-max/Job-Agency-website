import React from 'react';
import { UserPlus, Search, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-white" />,
      title: "1. Post a Job",
      description: "Create an account and post your job detail in minutes. Reach thousands of qualified professionals immediately.",
      color: "bg-blue-600"
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "2. Review Candidates",
      description: "Our AI matches you with the best talent. Review profiles, portfolios, and conduct interviews seamlessly.",
      color: "bg-indigo-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "3. Hire the Best",
      description: "Make an offer and onboard your new hire. We provide tools to make the transition smooth for everyone.",
      color: "bg-emerald-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 transform -skew-x-12 translate-x-32 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How TalentSync Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined hiring process designed to save you time and connect you with the right people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (visible on desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-${step.color.split('-')[1]}-500/30 ${step.color} mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
