import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Coursera',
      status: 'Completed',
      year: '2025',
      description: 'Comprehensive data analytics fundamentals covering data cleaning, visualization, and analysis using industry-standard tools.',
      color: 'bg-blue-50 border-blue-200',
      statusColor: 'bg-green-100 text-green-700 border-green-300',
    },
    {
      title: 'Deloitte Australia – Data Analytics Job Simulation',
      issuer: 'Forage',
      status: 'Completed',
      year: '2025',
      description: 'Hands-on experience with real-world data analytics tasks and business scenarios.',
      color: 'bg-green-50 border-green-200',
      statusColor: 'bg-green-100 text-green-700 border-green-300',
    },
    {
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
      issuer: 'Udemy',
      status: 'Completed',
      year: '2025',
      description: 'Comprehensive backend development covering RESTful API design, authentication, and database modeling.',
      color: 'bg-purple-50 border-purple-200',
      statusColor: 'bg-green-100 text-green-700 border-green-300',
    },
    {
      title: 'The Ultimate React Course: React, Next.js, Redux & More',
      issuer: 'Udemy',
      status: 'Completed',
      year: '2025',
      description: 'Advanced React development with modern frameworks and state management solutions.',
      color: 'bg-teal-50 border-teal-200',
      statusColor: 'bg-green-100 text-green-700 border-green-300',
    },
    {
      title: 'The Complete JavaScript Course: From Zero to Expert',
      issuer: 'Udemy',
      status: 'Completed',
      year: '2025',
      description: 'Deep dive into JavaScript fundamentals and advanced concepts covering ES6+ features.',
      color: 'bg-amber-50 border-amber-200',
      statusColor: 'bg-green-100 text-green-700 border-green-300',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-gray-600">Continuous learning and professional development</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`${cert.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3">
                  <Award className="text-teal-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.title}</h3>
                    <p className="text-gray-600 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <span className={`${cert.statusColor} px-3 py-1 rounded-full text-xs font-medium border`}>
                  {cert.status}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{cert.description}</p>
              <p className="text-gray-500 text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}