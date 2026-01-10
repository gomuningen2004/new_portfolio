import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-teal-600 font-medium mb-4">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Govardhan Annabathula
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Data Analyst | Full-Stack Developer
        </p>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Transforming data into actionable insights using Python, SQL, and advanced analytics.
          Passionate about uncovering patterns and building scalable solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors inline-flex items-center gap-2"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-600">
          <a
            href="https://linkedin.com/in/govardhan-annabathula"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/gomuningen2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:govardhan.annabathula@gmail.com"
            className="hover:text-teal-600 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}