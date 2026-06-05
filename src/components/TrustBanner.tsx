import { ShieldCheck, HardHat, FileText, Award } from 'lucide-react';

export default function TrustBanner() {
  const items = [
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Licensed & Insured", desc: "Comprehensive coverage for major commercial projects." },
    { icon: <HardHat className="w-8 h-8" />, title: "OSHA Compliant", desc: "Strict adherence to safety protocols and regular training." },
    { icon: <FileText className="w-8 h-8" />, title: "Fully Bonded", desc: "Performance and payment bonds up to $50M." },
    { icon: <Award className="w-8 h-8" />, title: "25+ Years Experience", desc: "Established track record of on-time delivery." },
  ];

  return (
    <div className="bg-[#e5e0d8] py-12 border-b border-[#d1c7bd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="text-[#3b2f28] shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#111111] mb-1">{item.title}</h4>
                <p className="text-sm text-[#475569] leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
