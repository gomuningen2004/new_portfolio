import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 justify-items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Govardhan Annabathula</h3>
            <p className="text-gray-400 leading-relaxed">
              Data Analyst & Full-Stack Developer transforming data into actionable insights
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/govardhan-annabathula"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/gomuningen2004"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:govardhan.annabathula@gmail.com"
                className="bg-gray-800 p-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Govardhan Annabathula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}