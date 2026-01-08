export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Gandhi Institute of Technology and Management (GITAM) University',
      location: 'Hyderabad, India',
      period: '2022 – 2025',
      gpa: 'GPA: 8.14/10.0',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      school: 'VNR Vignana Jyothi Institute of Engineering & Technology',
      location: 'Hyderabad, India',
      period: '2019 – 2022',
      color: 'bg-teal-50 border-teal-200',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${edu.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <span className="text-gray-600 font-medium">{edu.period}</span>
              </div>
              <p className="text-gray-800 font-medium mb-1">{edu.school}</p>
              <p className="text-gray-600">{edu.location}</p>
              {edu.gpa && <p className="text-gray-700 mt-2 font-medium">{edu.gpa}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}