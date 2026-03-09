import React from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, Eye, EyeOff, Tag, CheckCircle, Clock } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

const Projects = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  const filteredProjects = PROJECTS.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.languages.some(l => l.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && project.status === filter;
  });

  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-[#0f4c81] mb-4">Projects</h1>
            <div className="w-20 h-1.5 bg-[#0f4c81] rounded-full"></div>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-sky-300 rounded-xl text-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2.5 bg-white border border-sky-300 rounded-xl text-[#0f4c81] outline-none focus:ring-2 focus:ring-[#0f4c81]"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="in-progress">In Progress</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border border-sky-200 rounded-2xl overflow-hidden hover:border-sky-300 transition-all flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  {project.status === 'completed' ? (
                    <span className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 text-[10px] font-bold uppercase rounded border border-green-500/30">
                      <CheckCircle className="w-3 h-3" /> Completed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold uppercase rounded border border-yellow-500/30">
                      <Clock className="w-3 h-3" /> In Progress
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-[#0f4c81]/10 text-sky-600 text-[10px] font-bold uppercase rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-[#0f4c81] mb-2 group-hover:text-sky-600 transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.languages.map(lang => (
                    <span key={lang} className="text-[10px] font-mono text-slate-500">#{lang}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-sky-200">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-[#0f4c81] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Source
                  </a>
                  {project.previewAvailable ? (
                    <button className="flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-blue-400 transition-colors">
                      <Eye className="w-4 h-4" /> Preview
                    </button>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm font-bold text-gray-600 cursor-not-allowed">
                      <EyeOff className="w-4 h-4" /> No Preview
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
