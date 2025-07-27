import { CheckCircle, Clock, Shield, Zap } from 'lucide-react';

export function WhatMakesUsBest() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: 'Over 10 years of successful programs with measurable impact in communities worldwide.',
      stats: '98% Success Rate',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance and emergency support for all our program participants.',
      stats: '24/7 Available',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Comprehensive safety protocols and secure environments for all our services.',
      stats: '100% Secure',
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick deployment of resources and immediate assistance in crisis situations.',
      stats: '&lt;24hr Response',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What Makes Us Best
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence and innovation sets us apart in creating 
            sustainable change and lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-3xl transform rotate-6 opacity-20"></div>
              
              {/* Main image container */}
              <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration and success"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold">1,500+</div>
                      <div className="text-sm opacity-90">Lives Transformed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Communities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating achievement badges */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                Best<br />NGO
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce">
                2024<br />Award
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700 font-medium">Trusted by 10,000+ families worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}