import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#services' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Success Stories', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs = [
    { name: 'Education Programs', href: '#education' },
    { name: 'Healthcare Support', href: '#healthcare' },
    { name: 'Economic Empowerment', href: '#economic' },
    { name: 'Community Building', href: '#community' },
    { name: 'Mental Health', href: '#mental-health' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">EmpowerHer</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering women, uplifting children, and transforming generations through 
              comprehensive support programs and community development initiatives.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">123 Main Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">hello@empowerher.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Stay Connected</h3>
            <p className="text-gray-300 text-sm">
              Follow us on social media for the latest updates and stories from our community.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </a>
                );
              })}
            </div>

            {/* Impact Stats */}
            <div className="bg-gray-800 rounded-2xl p-4 space-y-3">
              <h4 className="font-semibold text-purple-400 text-sm">This Year's Impact</h4>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-white">2,300+</div>
                  <div className="text-xs text-gray-400">Lives Touched</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">150+</div>
                  <div className="text-xs text-gray-400">Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} EmpowerHer. All rights reserved. Made with ❤️ for a better world.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}