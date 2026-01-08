import { Database, Code, Wrench, Globe } from 'lucide-react';

export default function Technologies() {
  const categories = [
    {
      title: 'Data Analytics',
      icon: Database,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      skills: ['Python', 'SQL', 'R', 'Pandas', 'Tableau', 'Excel', 'Statistical Analysis', 'Data Visualization', 'RStudio'],
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      skills: ['Python', 'JavaScript', 'Java', 'SQL', 'R'],
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'bg-pink-50 border-pink-200',
      iconColor: 'text-pink-600',
      skills: ['React.js', 'Next.js', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'],
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'bg-amber-50 border-amber-200',
      iconColor: 'text-amber-600',
      skills: ['Git', 'Postman', 'RESTful APIs', 'Stripe', 'JWT'],
    },
  ];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Tools</h2>
          <p className="text-gray-600">A comprehensive toolkit for data analysis and full-stack development</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`${category.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`${category.iconColor}`} size={24} />
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white px-3 py-1.5 rounded-lg text-sm text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}