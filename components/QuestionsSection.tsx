import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';


export function QuestionsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How can I get involved with your organization?',
      answer: 'There are many ways to get involved! You can volunteer your time, make a donation, become a partner organization, or participate in our educational programs. Visit our "Get Involved" section to learn more about specific opportunities that match your interests and skills.',
    },
    {
      question: 'What programs do you offer for women empowerment?',
      answer: 'We offer comprehensive programs including vocational training, entrepreneurship development, leadership workshops, financial literacy, healthcare education, and digital skills training. All programs are designed to provide women with the tools and knowledge they need to become self-sufficient and empowered.',
    },
    {
      question: 'How do you ensure the safety of program participants?',
      answer: 'Safety is our top priority. We have strict safety protocols, trained staff, secure facilities, background checks for all volunteers and staff, and 24/7 support systems. We also provide safe spaces and confidential support services for those who need them.',
    },
    {
      question: 'Can I volunteer if I don\'t have specific skills?',
      answer: 'Absolutely! We welcome volunteers of all backgrounds and skill levels. We provide training and orientation for all volunteers, and there are many ways to contribute, from administrative support to community outreach. Your enthusiasm and commitment are what matter most.',
    },
    {
      question: 'How are donations used?',
      answer: 'We maintain full transparency with our donations. 85% goes directly to programs, 10% to administrative costs, and 5% to fundraising efforts. We provide detailed annual reports and regular updates to donors showing exactly how their contributions are making a difference.',
    },
    {
      question: 'Do you work internationally?',
      answer: 'Yes, we operate in over 25 countries worldwide. Our programs are adapted to local cultures and needs while maintaining our core mission of empowering women and supporting children. We work with local partners to ensure sustainability and cultural sensitivity.',
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'Call Now',
      color: 'text-green-600 bg-green-100',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@empowerher.org',
      action: 'Send Email',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Available 24/7',
      action: 'Start Chat',
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
            <HelpCircle className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Your Questions Answered
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our programs, how to get involved, 
            and the impact we're making together.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Still Have Questions?
            </h3>
            <p className="text-lg text-gray-600">
              Our team is here to help. Reach out to us through any of these channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center space-y-4 p-6 rounded-2xl border border-gray-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl ${method.color} mx-auto flex items-center justify-center`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    >
                      {method.action}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Ready to make a difference? Join our mission today.
            </p>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}