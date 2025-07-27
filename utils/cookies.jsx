import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Show banner after a short delay for better UX
    const timer = setTimeout(() => {
      if (!isAccepted) {
        setIsVisible(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAccepted]);

  const handleAccept = () => {
    setIsAccepted(true);
    setIsVisible(false);
    // Here you would normally save to localStorage, but we'll use state instead
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    setIsAccepted(false);
    setIsVisible(false);
    console.log('Cookies declined');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-auto" onClick={handleClose}></div>
      
      {/* Cookie Banner */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 pointer-events-auto transform transition-all duration-300 ease-out">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close cookie banner"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Cookie Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze website traffic, personalize content, and assist with our marketing efforts. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>

              {/* Cookie Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-t border-gray-100">
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-primary text-sm">Essential</div>
                  <div className="text-xs text-gray-500 mt-1">Required for site functionality</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-primary text-sm">Analytics</div>
                  <div className="text-xs text-gray-500 mt-1">Help us improve our website</div>
                </div>
       
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Accept All Cookies
                </button>
                
                <button
                  onClick={handleDecline}
                  className="flex-1 sm:flex-initial border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Decline
                </button>
                
          
              </div>

              {/* Privacy Policy Link */}
              <div className="text-center pt-2">
                <p className="text-xs text-gray-500">
                  Learn more about our data practices in our{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-700 underline font-medium">
                    Privacy Policy
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-purple-600 hover:text-purple-700 underline font-medium">
                    Cookie Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient border */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-b-2xl"></div>
      </div>
    </div>
  );
}