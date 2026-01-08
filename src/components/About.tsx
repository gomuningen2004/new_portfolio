export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              I'm a data analyst and full-stack developer with a passion for transforming complex
              data into actionable insights. With expertise in Python, SQL, and modern web technologies,
              I bridge the gap between data analysis and software engineering to create comprehensive solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My analytical approach combines statistical rigor with practical business acumen.
              I specialize in exploratory data analysis, predictive modeling, and building data-driven
              applications that help organizations make informed decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Currently pursuing my Bachelor's in Computer Science at GITAM University, I continuously
              expand my skill set through hands-on projects and professional certifications, including
              the Google Data Analytics Professional Certificate.
            </p>
            <div className="flex items-center gap-2 text-gray-600 mt-6">
              <span className="text-teal-600 font-semibold">Location:</span>
              <span>Hyderabad, India</span>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What I Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span className="text-gray-700">
                  Analyze large datasets to uncover trends and insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span className="text-gray-700">
                  Build interactive dashboards and visualizations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span className="text-gray-700">
                  Develop full-stack web applications with modern frameworks
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span className="text-gray-700">
                  Design and optimize database schemas and queries
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 mt-1">•</span>
                <span className="text-gray-700">
                  Automate data pipelines and ETL processes
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}