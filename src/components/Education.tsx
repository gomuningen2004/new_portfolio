import { GraduationCap, Briefcase } from 'lucide-react';

export default function Education() {
  const timeline = [
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      organization: 'Gandhi Institute of Technology and Management (GITAM) University',
      location: 'Hyderabad, India',
      period: '2022 – 2025',
      details: 'GPA: 8.14/10.0',
      icon: GraduationCap,
    },
    {
      type: 'internship',
      title: 'Android Developer Virtual Internship',
      organization: 'AICTE (All India Council for Technical Education)',
      location: 'Remote',
      period: 'July 2024 – September 2024',
      details: 'Mobile application development',
      icon: Briefcase,
    },
    {
      type: 'education',
      title: 'Diploma in Mechanical Engineering',
      organization: 'VNR Vignana Jyothi Institute of Engineering & Technology',
      location: 'Hyderabad, India',
      period: '2019 – 2022',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 to-blue-600"></div>

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="mb-12 pl-24 relative">
                  <div className="absolute -left-6 top-0 w-14 h-14 bg-white rounded-full flex items-center justify-center border-4 border-teal-600 shadow-lg">
                    <Icon className="text-teal-600" size={28} />
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-700 font-medium text-sm">{item.organization}</p>
                      </div>
                      <span className="text-sm font-medium text-teal-600 whitespace-nowrap">{item.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.location}</p>
                    {item.details && <p className="text-gray-700 text-sm font-medium">{item.details}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
