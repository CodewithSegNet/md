import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from '../assets/secondLogo.svg'



export function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Blog', href: '/get-involved' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Announcements', href: '/contact' },
  ];

  const programs = [
    { name: 'Email', href: '', isLabel: true },
    { name: 'elevationeeli@gmail.com ', href: 'mailto:elevationeeli@gmail.com', isLabel: false },
    { name: 'Phone', href: '', isLabel: true },
    { name: '+1 (647) 891-4521', href: 'tel:+16478914521', isLabel: false },
    { name: 'Office Hours:', href: '', isLabel: true },
    { name: 'Mon–Sat, 9 AM – 6 PM', href: '', isLabel: false },

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
    <footer className="bg-[rgba(70,18,118,1)] lg:py-20 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 flex flex-col lg:flex-row lg:items-center lg:gap-[14rem] gap-8">
          {/* Brand Section */}
          <div className="w-full lg:w-[27%] space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-13 h-13 bg-gradient-to-br rounded-full flex items-center justify-center">
                <img src={Logo} className="" />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
We uplift women and children by providing emotional support, educational tools, and practical resources that help them thrive.
            </p>
            <div className="">
              <div className="flex items-center space-x-3 text-gray-300">
            {/* Social Links */}
            <div className="flex w-fit space-x-4">
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

              </div>
            
            </div>
          </div>




<div className='flex flex-col sm:flex-row sm:gap-[3rem] lg:gap-[5rem] gap-8'>

          <div className="space-y-6">
            <h3 className="text-lg text-white font-bold">Quick Links</h3>
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
            <h3 className="text-lg text-white  font-bold">Get In Touch</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  {program.isLabel ? (
                    <span className="text-white font-bold text-sm">
                      {program.name}
                    </span>
                  ) : program.href ? (
                    <a 
                      href={program.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {program.name}
                    </a>
                  ) : (
                    <span className="text-gray-300 text-sm">
                      {program.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-lg text-white  font-bold">Visit Us</h3>
            <p className="text-white font-bold text-sm">
              Address
            </p>

            <p className="text-gray-300 text-sm">Barrie L4N6R8 ON Canada</p>
            


          </div>

</div>

         

        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SINCE. 2023
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
©EELI. All rights reserved.
              </a>
         
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}