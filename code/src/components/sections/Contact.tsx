import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out via email or phone.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-400 rounded-lg">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </h4>
                  <a
                    href="mailto:jlsmpimenta27@gmail.com"
                    className="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    jlsmpimenta27@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-400 rounded-lg">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone
                  </h4>
                  <a
                    href="tel:+351926376413"
                    className="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    +(351) 926 376 413
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-400 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Location
                  </h4>
                  <p className="text-gray-900 dark:text-white">
                    Espinho, Portugal
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-gray-50 dark:bg-gray-600 rounded-lg">
              <h4 className="text-base font-medium text-gray-900 dark:text-white mb-3">
                Availability
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                I'm currently available for freelance work and full-time positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
