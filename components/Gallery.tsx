import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, BookOpen } from 'lucide-react';


export function Gallery() {
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Heart },
    { id: 'education', name: 'Education', icon: BookOpen },
    { id: 'community', name: 'Community', icon: Users },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
  ];

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Women empowerment workshop',
      category: 'education',
      title: 'Skills Development Workshop',
      description: 'Women learning new vocational skills',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Children in classroom',
      category: 'education',
      title: 'Education Program',
      description: 'Children engaged in learning activities',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Healthcare clinic',
      category: 'healthcare',
      title: 'Mobile Health Clinic',
      description: 'Providing healthcare in rural areas',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Community gathering',
      category: 'community',
      title: 'Community Meeting',
      description: 'Local leaders discussing development',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1593113616828-ba5ad9de6c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Women entrepreneurs',
      category: 'community',
      title: 'Entrepreneur Program',
      description: 'Women starting their own businesses',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Team collaboration',
      category: 'community',
      title: 'Team Building',
      description: 'Volunteers working together',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Medical checkup',
      category: 'healthcare',
      title: 'Health Screening',
      description: 'Regular health checkups for children',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Learning session',
      category: 'education',
      title: 'Adult Literacy Program',
      description: 'Teaching reading and writing skills',
    },
  ];

  const filteredItems = currentCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Impact in Pictures
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See the real stories and transformations happening in communities through our programs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  currentCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <ImageWithFallback
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                  <Badge 
                    variant="secondary" 
                    className="mt-2 bg-white/20 text-white border-white/30"
                  >
                    {categories.find(cat => cat.id === item.category)?.name}
                  </Badge>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <Badge 
                  variant="secondary" 
                  className="bg-white/90 text-gray-700 backdrop-blur-sm"
                >
                  {categories.find(cat => cat.id === item.category)?.name}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View More Photos
          </button>
        </div>

        {/* Success Stories */}
        <div className="mt-20 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Real Stories, Real Impact
            </h3>
            <p className="text-lg text-gray-600">
              Behind every photo is a story of transformation and hope.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-purple-600">85%</div>
              <div className="text-gray-700">Women gained new skills</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-purple-600">92%</div>
              <div className="text-gray-700">Children improved literacy</div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-purple-600">78%</div>
              <div className="text-gray-700">Families increased income</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}