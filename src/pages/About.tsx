import PageHeader from '../components/PageHeader';
import { Shield, Target, Users, HardHat } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target className="w-8 h-8" />, title: "Precision", desc: "Utilizing advanced GPS and 3D modeling to ensure exact grades and efficient material movement." },
    { icon: <Shield className="w-8 h-8" />, title: "Safety First", desc: "An uncompromising commitment to OSHA standards, daily safety briefs, and zero-incident goals." },
    { icon: <Users className="w-8 h-8" />, title: "Integrity", desc: "Transparent bidding, honest timelines, and proactive communication with general contractors." },
    { icon: <HardHat className="w-8 h-8" />, title: "Expertise", desc: "Decades of combined experience navigating complex soil conditions and difficult site constraints." },
  ];

  return (
    <div className="w-full">
      <PageHeader 
        title="About Solum" 
        subtitle="A legacy of groundwork excellence." 
        image="/media/safety.jpg" 
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#475569] uppercase tracking-widest mb-3">Our History</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#111111] leading-tight mb-6">
                Built from the ground up.
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded on the principles of hard work and technical precision, Solum Site Work has grown from a small regional grading contractor into a nationwide leader in commercial earthwork and site development.
                </p>
                <p>
                  We understand that the foundation of any successful project lies beneath the surface. That's why we've invested heavily in state-of-the-art machinery, GPS machine control technology, and most importantly, our people. Our operators and project managers are among the most skilled in the industry.
                </p>
                <p>
                  Whether it's a 100-acre industrial park or a complex urban infill project, we bring the same level of dedication, ensuring your site is prepped on time, on budget, and exactly to spec.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/media/fleet.jpg" alt="Fleet" className="w-full h-64 object-cover rounded-sm" />
              <img src="/media/grading.jpg" alt="Grading" className="w-full h-64 object-cover rounded-sm mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#111111] mb-4">Core Values</h2>
            <p className="text-gray-600">The principles that guide our operations every day, on every site.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <div className="text-[#3b2f28] mb-6 bg-[#e5e0d8] inline-block p-4 rounded-full">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold text-[#111111] mb-3">{val.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
