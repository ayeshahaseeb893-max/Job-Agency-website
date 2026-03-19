import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <Briefcase size={20} />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Talent<span className="text-blue-500">Sync</span></span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Connecting exceptional talent with <br />world-class companies. Modernizing the recruitment experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Links: For Candidates */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">For Candidates</h3>
            <ul className="space-y-3">
              <li><Link to="/jobs" className="text-sm hover:text-blue-400 transition-colors">Browse Jobs</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Career Advice</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Resume Builder</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Job Alerts</Link></li>
            </ul>
          </div>

          {/* Links: For Employers */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">For Employers</h3>
            <ul className="space-y-3">
              <li><Link to="/post-job" className="text-sm hover:text-blue-400 transition-colors">Post a Job</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Search Resumes</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Integration</Link></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TalentSync. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
