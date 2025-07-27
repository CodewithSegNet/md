import { Target, Eye, Award, Globe } from 'lucide-react';


export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower women and uplift children through education, healthcare, and community support programs.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where every woman and child has the opportunity to thrive and reach their full potential.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Integrity, compassion, empowerment, and sustainable community development guide everything we do.',
    },
    {
      icon: Globe,
      title: 'Our Impact',
      description: 'Creating lasting change across communities through collaborative partnerships and innovative solutions.',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                About Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over a decade, we've been dedicated to creating meaningful change in communities 
                around the world. Our comprehensive approach focuses on sustainable development through 
                education, healthcare, and economic empowerment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1593113616828-ba5ad9de6c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Women empowerment program"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Children education program"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Community development"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Healthcare support"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}