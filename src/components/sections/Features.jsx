import React from 'react';
import { Zap, ShieldCheck, Globe } from 'lucide-react';
import Card from '../ui/Card';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Fast Hiring",
      description: "Our AI-powered matching system connects you with qualified candidates in record time."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Verified Talent",
      description: "Every candidate undergoes a rigorous screening and verification process."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Global Reach",
      description: "Access a worldwide pool of exceptional remote and on-site professionals."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why choose TalentSync?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the tools and network you need to streamline your hiring process and find the perfect match.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center sm:text-left">
              <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-xl mb-6 shadow-sm border border-blue-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
