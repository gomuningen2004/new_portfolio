import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">Let's connect! Feel free to reach out for opportunities or collaboration</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="bg-white rounded-xl p-8 border-2 border-gray-200 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Mail className="text-teal-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <a
                  href="mailto:govardhan.annabathula@gmail.com"
                  className="text-gray-600 hover:text-teal-600 transition-colors"
                >
                  govardhan.annabathula@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <MapPin className="text-teal-600" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">Hyderabad, India</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/govardhan-annabathula"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-teal-600 hover:text-teal-600 transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/gomuningen2004"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-teal-600 hover:text-teal-600 transition-all"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
