import React from 'react';
import { Code, DollarSign, HeartPulse, HardHat, PieChart, Headphones, PenTool, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

const JobCategories = () => {
  const categories = [
    { icon: <Code />, name: 'IT & Software', count: '1,240 Jobs', color: 'bg-indigo-50 text-indigo-600' },
    { icon: <DollarSign />, name: 'Finance', count: '850 Jobs', color: 'bg-emerald-50 text-emerald-600' },
    { icon: <HeartPulse />, name: 'Healthcare', count: '2,100 Jobs', color: 'bg-rose-50 text-rose-600' },
    { icon: <HardHat />, name: 'Engineering', count: '920 Jobs', color: 'bg-amber-50 text-amber-600' },
    { icon: <PieChart />, name: 'Marketing', count: '1,500 Jobs', color: 'bg-fuchsia-50 text-fuchsia-600' },
    { icon: <Headphones />, name: 'Customer Support', count: '3,450 Jobs', color: 'bg-cyan-50 text-cyan-600' },
    { icon: <PenTool />, name: 'Design', count: '890 Jobs', color: 'bg-purple-50 text-purple-600' },
    { icon: <Database />, name: 'Data Science', count: '450 Jobs', color: 'bg-blue-50 text-blue-600' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Categories</h2>
            <p className="text-lg text-gray-600">Explore opportunities across high-demand industries.</p>
          </div>
          <Link to="/jobs" className="text-blue-600 font-medium hover:text-blue-700 hover:underline inline-flex items-center gap-1 transition-all">
            Browse All Categories &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to="/jobs" className="block group">
              <Card className="p-6 transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg border-gray-100">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${category.color} transition-transform group-hover:scale-110 duration-300`}>
                  {React.cloneElement(category.icon, { className: 'w-6 h-6' })}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                <p className="text-sm text-gray-500 font-medium">{category.count}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
