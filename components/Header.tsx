import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import Logo from '../assets/Logo.svg'
import menu1 from '../assets/menu1.svg'
import menu2 from '../assets/menu2.svg'



interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // Scrolling up (but not at top)
        setIsVisible(true);
        setIsScrollingUp(true);
      } else if (currentScrollY <= 100) {
        // At top - show header but remove background
        setIsVisible(true);
        setIsScrollingUp(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { name: 'Home', href: 'home' },
    { name: 'About Us', href: 'About us' },
    { name: 'Gallery', href: 'Gallery' },
    { name: 'Announcements', href: 'Announcements' },
    { name: 'Blog', href: 'Blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrollingUp ? 'bg-gray-100 pb-4' : ''}`}>
      <div className="max-w-screen-2xl pt-5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
              <img src={Logo} className="w[55px] h-[55px] text-white" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center bg-white p-5 rounded-full  space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-purple-600 transition-colors font-helvetica duration-200 text-md font-bold"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">

            <button className='bg-primary transition-all hover:bg-purple-500 duration-200 rounded-full py-4 px-10 text-white flex items-center gap-2 justify-center group'>
              <div className="relative w-6 h-6">
                <img 
                  src={menu1} 
                  alt="" 
                  className="absolute inset-0 transition-all duration-300 ease-in-out opacity-100 rotate-0 group-hover:opacity-0 group-hover:rotate-180"
                />
                <img 
                  src={menu2} 
                  alt=""
                  className="absolute inset-0 transition-all duration-300 ease-in-out opacity-0 -rotate-180 group-hover:opacity-100 group-hover:rotate-0"
                />
              </div>
              <p className='text-white font-bold text-sm font-helvetica'>EMPOWER A WOMAN NOW</p>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200 space-y-2">
        
            </div>
          </div>
        </div>
      )}
    </header>
  );
}