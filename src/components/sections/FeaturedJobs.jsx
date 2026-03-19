import React from 'react';
import { MapPin, Clock, Building2 } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechNova',
      logo: 'T',
      location: 'Remote, US',
      type: 'Full-time',
      salary: '$120k - $150k',
      postedAt: '2 days ago',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      id: 2,
      title: 'Product Design Lead',
      company: 'InnovateSpace',
      logo: 'I',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $160k',
      postedAt: '5 hours ago',
      tags: ['Figma', 'UX Research', 'Prototyping']
    },
    {
      id: 3,
      title: 'Backend Engineer (Go)',
      company: 'CloudStream',
      logo: 'C',
      location: 'London, UK',
      type: 'Contract',
      salary: '£80 - £100 / hr',
      postedAt: '1 day ago',
      tags: ['Golang', 'Kubernetes', 'AWS']
    },
    {
      id: 4,
      title: 'Marketing Director',
      company: 'GrowthHub',
      logo: 'G',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140k - $180k',
      postedAt: '3 days ago',
      tags: ['Strategy', 'B2B', 'Analytics']
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Jobs</h2>
            <p className="text-lg text-gray-600">Hand-picked opportunities from top companies.</p>
          </div>
          <Button variant="outline" to="/jobs">View All Jobs</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 flex flex-col sm:flex-row gap-6 items-start hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex shrink-0 items-center justify-center text-2xl font-bold">
                {job.logo}
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
                    {job.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 self-start">
                    {job.postedAt}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 mt-2">
                  <div className="flex items-center gap-1.5 hover:text-gray-700">
                    <Building2 className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="font-semibold text-gray-900">{job.salary}</span>
                  <Button size="sm">Apply Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
