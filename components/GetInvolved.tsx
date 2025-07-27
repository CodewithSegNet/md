import { Heart, Users, BookOpen, Gift } from 'lucide-react';

export function GetInvolved() {
  const involvementOptions = [
    {
      icon: Heart,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers making a difference in communities.',
      action: 'Start Volunteering',
      color: 'text-red-600 bg-red-100',
    },
    {
      icon: Gift,
      title: 'Donate',
      description: 'Support our mission with a donation to help us reach more families.',
      action: 'Donate Now',
      color: 'text-green-600 bg-green-100',
    },
    {
      icon: Users,
      title: 'Partner',
      description: 'Collaborate with us to create larger impact in your community.',
      action: 'Become Partner',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: BookOpen,
      title: 'Educate',
      description: 'Share knowledge and skills to empower women and children.',
      action: 'Join Program',
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Get Involved
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways you can make a difference. Choose the path that resonates 
            with you and help us create positive change together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {involvementOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
              >
                <CardHeader className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full ${option.color} mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {option.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full"
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of changemakers who are already creating impact in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg"
              >
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}