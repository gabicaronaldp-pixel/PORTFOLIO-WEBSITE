import React from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Mock API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-sky-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-[#0f4c81] mb-4">Get In Touch</h1>
          <p className="text-slate-600 max-w-xl mx-auto">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
          <div className="w-20 h-1.5 bg-[#0f4c81] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#0f4c81]/10 rounded-2xl border border-blue-600/20">
                  <Mail className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-[#0f4c81] font-bold text-lg mb-1">Email Me</h4>
                  <p className="text-slate-600">gabicaronaldp@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#0f4c81]/10 rounded-2xl border border-blue-600/20">
                  <MapPin className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-[#0f4c81] font-bold text-lg mb-1">Location</h4>
                  <p className="text-slate-600">145 Ambonao Calasiao, Pangasinan, Philippines</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#0f4c81]/10 rounded-2xl border border-blue-600/20">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-[#0f4c81] font-bold text-lg mb-1">Call Me</h4>
                  <p className="text-slate-600">09124502747</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-sky-200">
              <h4 className="text-[#0f4c81] font-bold mb-6 uppercase tracking-widest text-sm">Follow My Work</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, label: 'Github', url: 'https://github.com/gabicaronaldp-pixel' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 bg-white text-slate-600 rounded-xl border border-sky-200 hover:text-sky-600 hover:border-sky-300 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 bg-white border border-sky-200 rounded-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 px-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 bg-sky-50 border border-sky-300 rounded-xl text-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 px-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 bg-sky-50 border border-sky-300 rounded-xl text-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 px-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-4 bg-sky-50 border border-sky-300 rounded-xl text-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] outline-none transition-all appearance-none"
                >
                  <option>General Inquiry</option>
                  <option>Project Collaboration</option>
                  <option>Research Discussion</option>
                  <option>Freelance Work</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 px-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 bg-sky-50 border border-sky-300 rounded-xl text-[#0f4c81] focus:ring-2 focus:ring-[#0f4c81] outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                disabled={status === 'sending'}
                className={cn(
                  "w-full py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all",
                  status === 'success' ? "bg-green-600 text-white" : "bg-[#0f4c81] hover:bg-[#0f4c81]/90 text-white shadow-lg shadow-[#0f4c81]/20"
                )}
              >
                {status === 'sending' ? (
                  "Sending..."
                ) : status === 'success' ? (
                  "Message Sent!"
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
