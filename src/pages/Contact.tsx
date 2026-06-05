import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="w-full">
      <PageHeader 
        title="Contact Us" 
        subtitle="Request a bid or connect with our estimating team." 
        image="/media/grading.jpg" 
      />

      <section className="py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#111111] mb-6">Let's build something great together.</h2>
              <p className="text-gray-600 mb-12 text-lg">
                Whether you're in the early planning stages or ready to break ground tomorrow, Solum Site Work has the expertise and equipment to execute your project flawlessly.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#3b2f28] p-3 rounded-sm text-[#e5e0d8] mr-5 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] text-lg mb-1">Headquarters</h4>
                    <p className="text-gray-600">1000 Industrial Pkwy<br/>Dallas, TX 75201</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3b2f28] p-3 rounded-sm text-[#e5e0d8] mr-5 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] text-lg mb-1">Phone</h4>
                    <p className="text-gray-600">Main: (800) 555-0199<br/>Estimating: (800) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3b2f28] p-3 rounded-sm text-[#e5e0d8] mr-5 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] text-lg mb-1">Email</h4>
                    <p className="text-gray-600">bids@solumsitework.com<br/>info@solumsitework.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#3b2f28] p-3 rounded-sm text-[#e5e0d8] mr-5 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111111] text-lg mb-1">Operating Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 6:00 AM - 6:00 PM<br/>Saturday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-gray-100">
              <h3 className="text-2xl font-extrabold text-[#111111] mb-6">Request a Bid</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-[#4f5e4d]/10 border border-[#4f5e4d] text-[#4f5e4d] p-6 rounded-sm text-center">
                  <h4 className="text-xl font-bold mb-2">Request Received</h4>
                  <p>Thank you for reaching out. Our estimating team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                      <input type="text" id="firstName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3b2f28] focus:border-transparent transition-shadow" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                      <input type="text" id="lastName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3b2f28] focus:border-transparent transition-shadow" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                    <input type="text" id="company" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3b2f28] focus:border-transparent transition-shadow" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3b2f28] focus:border-transparent transition-shadow" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3b2f28] focus:border-transparent transition-shadow" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Project Details</label>
                    <textarea id="message" rows={4} required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3b2f28] focus:border-transparent transition-shadow"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-[#3b2f28] hover:bg-[#111111] text-white font-bold py-4 rounded-sm transition-colors disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
