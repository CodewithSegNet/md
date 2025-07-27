import { GraduationCap, Heart, Users, Briefcase, Home, Stethoscope } from 'lucide-react';


export function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Education Programs',
      description: 'Comprehensive learning opportunities for women and children including literacy, vocational training, and skill development.',
      features: ['Adult Literacy', 'Vocational Training', 'Digital Skills', 'Leadership Development'],
      color: 'text-blue-600 bg-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Support',
      description: 'Essential healthcare services focusing on maternal health, child nutrition, and preventive care.',
      features: ['Maternal Health', 'Child Nutrition', 'Preventive Care', 'Health Education'],
      color: 'text-green-600 bg-green-100',
      borderColor: 'border-green-200',
    },
    {
      icon: Briefcase,
      title: 'Economic Empowerment',
      description: 'Business training, microfinance, and entrepreneurship programs to create sustainable income.',
      features: ['Microfinance', 'Business Training', 'Market Access', 'Financial Literacy'],
      color: 'text-purple-600 bg-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Strengthening community networks through leadership training and collaborative initiatives.',
      features: ['Leadership Training', 'Community Networks', 'Advocacy Programs', 'Social Support'],
      color: 'text-orange-600 bg-orange-100',
      borderColor: 'border-orange-200',
    },
    {
      icon: Heart,
      title: 'Mental Health',
      description: 'Counseling, support groups, and mental wellness programs for emotional wellbeing.',
      features: ['Counseling Services', 'Support Groups', 'Stress Management', 'Trauma Recovery'],
      color: 'text-pink-600 bg-pink-100',
      borderColor: 'border-pink-200',
    },
    {
      icon: Home,
      title: 'Safe Spaces',
      description: 'Creating secure environments where women and children can access services and support.',
      features: ['Safe Houses', 'Community Centers', 'Resource Hubs', 'Emergency Support'],
      color: 'text-indigo-600 bg-indigo-100',
      borderColor: 'border-indigo-200',
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support through various programs designed to address 
            the unique needs of women and children in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 border-2 ${service.borderColor} hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50`}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-900 mb-3">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Our Services?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our dedicated team is here to help. Contact us to learn more about our programs 
              and how you can access our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200">
                Get Started
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}