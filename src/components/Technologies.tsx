import { Database, Code, Wrench, Globe, BarChart3, Terminal } from 'lucide-react';

export default function Technologies() {
  const skills = [
    { name: 'Python', icon: '🐍', category: 'Programming' },
    { name: 'JavaScript', icon: '⚡', category: 'Programming' },
    { name: 'Java', icon: '☕', category: 'Programming' },
    { name: 'SQL', icon: '🗄️', category: 'Database' },
    { name: 'R', icon: '📊', category: 'Analytics' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'HTML5', icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', icon: '🎨', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '💨', category: 'Frontend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'MySQL', icon: '🐬', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Supabase', icon: '🔥', category: 'Database' },
    { name: 'Pandas', icon: '🐼', category: 'Analytics' },
    { name: 'Tableau', icon: '📈', category: 'Analytics' },
    { name: 'Excel', icon: '📑', category: 'Analytics' },
    { name: 'RStudio', icon: '📋', category: 'Analytics' },
    { name: 'Git', icon: '🔀', category: 'Tools' },
    { name: 'Postman', icon: '🐭', category: 'Tools' },
    { name: 'RESTful APIs', icon: '🔗', category: 'Tools' },
    { name: 'Stripe', icon: '💳', category: 'Tools' },
    { name: 'JWT', icon: '🔐', category: 'Tools' },
  ];

  const categories = ['Programming', 'Frontend', 'Backend', 'Database', 'Analytics', 'Tools'];

  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies & Tools</h2>
          <p className="text-gray-600">A comprehensive toolkit for data analysis and full-stack development</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-lg px-4 py-3 hover:border-teal-600 hover:shadow-lg transition-all cursor-default"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium text-gray-900">{skill.name}</span>
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                {skill.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
