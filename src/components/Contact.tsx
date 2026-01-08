import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-gray-600">Let's connect! Feel free to reach out for opportunities or collaboration</p>
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
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
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <a
                    href="tel:+916301865430"
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                  >
                    +91-6301865430
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

            <div className="mt-8">
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

          <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            {submitted && (
              <div className="mb-4 p-3 bg-green-100 border-2 border-green-300 text-green-700 rounded-lg text-sm">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border-2 border-red-300 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 transition-colors font-medium"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}