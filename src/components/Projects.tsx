import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const dataProjects = [
    {
      title: 'Family Shop Sales – Exploratory Data Analysis',
      year: '2025',
      description:
        'Performed exploratory data analysis on real-world sales data from a family-run retail shop to understand revenue drivers, seasonality, and demand variability, translating raw transactions into actionable business insights.',
      highlights: [
        'Cleaned and standardized daily sales data, handling missing values and removing non-operational days',
        'Analyzed revenue trends across months and weekdays to uncover seasonal and temporal patterns',
        'Identified core revenue-driving items and distinguished stable products from highly volatile, low-demand items',
      ],
      tags: ['Python', 'Pandas', 'EDA', 'Data Analysis'],
      github: 'https://github.com/gomuningen2004/shop_sales',
      color: 'border-green-200 hover:border-green-400',
    },
    {
      title: 'Superstore Sales & Profitability Analysis',
      year: '2025',
      description:
        'Analyzed 10,000+ retail transactions (2014-2017) using Python and SQL, uncovering that Furniture generated 32% of sales but only 6% of profit, identifying critical margin optimization opportunities.',
      highlights: [
        'Conducted statistical analysis revealing strong negative correlation (-0.54) between discounts and profitability',
        'Performed time-series analysis identifying seasonal trends and regional performance patterns',
        'Delivered actionable insights on high-value customer segments to drive strategic decision-making',
      ],
      tags: ['Python', 'SQL', 'Pandas', 'MySQL', 'Data Visualization'],
      github: 'https://github.com/gomuningen2004/superstore_analysis',
      color: 'border-blue-200 hover:border-blue-400',
    },
    {
      title: 'Customer Shopping Behavior Analysis',
      year: '2025',
      description:
        'Analyzed 3,900+ customer transactions across 19 data fields using Python and SQL to identify shopping patterns and revenue drivers.',
      highlights: [
        'Performed data cleaning and ETL processes, creating customer segments by purchase frequency',
        'Discovered 27% of $233K+ revenue came from 11% of customers',
        'Informed targeted retention strategies and maximized customer lifetime value',
      ],
      tags: ['Python', 'SQL', 'Pandas', 'Statistical Analysis'],
      github: 'https://github.com/gomuningen2004/customer-trend-analysis-SQL-Python',
      color: 'border-teal-200 hover:border-teal-400',
    },
  ];

  const webProjects = [
    {
      title: 'Natours – Full-Stack Tour Booking Platform',
      year: '2025',
      description:
        'Developed production-ready RESTful API with secure authentication and Stripe payment integration using JWT-based authorization.',
      highlights: [
        'Implemented advanced query filtering and pagination features',
        'Improved API response time by 40% through optimized database queries',
        'Built comprehensive error handling middleware and data validation layers',
      ],
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT'],
      github: 'https://github.com/gomuningen2004/Natours',
      color: 'border-purple-200 hover:border-purple-400',
    },
    {
      title: 'The Wild Oasis – Hotel Management System',
      year: '2025',
      description:
        'Comprehensive hotel booking and management platform with advanced cabin management and guest booking features.',
      highlights: [
        'Built with React and Supabase for real-time data synchronization',
        'Implemented role-based access control and secure authentication',
        'Created intuitive dashboard with data visualizations for business insights',
      ],
      tags: ['React', 'Supabase', 'React Query', 'Styled Components'],
      github: 'https://github.com/gomuningen2004/the-wild-oasis',
      color: 'border-green-200 hover:border-green-400',
    },
    {
      title: 'Forkify – Recipe Search Application',
      year: '2025',
      description:
        'Modern recipe application with search, bookmarking, and custom recipe upload functionality.',
      highlights: [
        'Integrated with external recipe API for extensive recipe database',
        'Implemented local storage for user bookmarks and preferences',
        'Built responsive UI with smooth animations and transitions',
      ],
      tags: ['JavaScript', 'REST API', 'MVC Architecture', 'Parcel'],
      github: 'https://github.com/gomuningen2004/Forkify',
      color: 'border-pink-200 hover:border-pink-400',
    },
    {
      title: 'Cocktail Mayhem',
      year: '2025',
      description:
        'Interactive cocktail discovery application with advanced filtering and detailed recipe information.',
      highlights: [
        'Integrated with cocktail API for comprehensive drink database',
        'Built responsive search and filter functionality',
        'Implemented user-friendly UI with detailed recipe cards and ingredients',
      ],
      tags: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
      github: 'https://github.com/gomuningen2004/Cocktail-Mayhem',
      color: 'border-orange-200 hover:border-orange-400',
    },
    {
      title: 'Blog Application',
      year: '2025',
      description:
        'Full-featured blogging platform built with modern web technologies and comprehensive content management system.',
      highlights: [
        'Implemented user authentication and authorization systems',
        'Created post creation, editing, and deletion functionality with rich text editor',
        'Built comment system and user engagement features',
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
      github: 'https://github.com/gomuningen2004/Blog-application',
      color: 'border-yellow-200 hover:border-yellow-400',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-gray-600">A showcase of data analytics insights and real-world applications</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-blue-600 rounded"></div>
            <h3 className="text-2xl font-bold text-gray-900">Data Analytics Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {dataProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-purple-600 rounded"></div>
            <h3 className="text-2xl font-bold text-gray-900">Web Development Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className={`bg-white border-2 ${project.color} rounded-xl p-6 hover:shadow-xl transition-all duration-300`}>
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-xl font-bold text-gray-900">{project.title}</h4>
        <span className="text-sm text-gray-500 font-medium">{project.year}</span>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

      <ul className="space-y-2 mb-4">
        {project.highlights.map((highlight: string, idx: number) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-teal-600 mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-gray-200">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
        >
          <Github size={16} />
          View Code
        </a>
      </div>
    </div>
  );
}
