import { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

import { toast } from 'sonner';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Simulate subscription
    setIsSubscribed(true);
    toast.success('Thank you for subscribing to our newsletter!');
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Stay Connected with Our Mission
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get the latest updates on our programs, success stories, and ways to get involved. 
              Join our community of changemakers making a difference worldwide.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Impact Updates</h3>
              <p className="text-white/80 text-sm">Monthly reports on program outcomes</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Success Stories</h3>
              <p className="text-white/80 text-sm">Inspiring stories from our community</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">Volunteer Opportunities</h3>
              <p className="text-white/80 text-sm">First access to new volunteer programs</p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/50"
                  />
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 whitespace-nowrap"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-white/70 text-sm">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="bg-white/20 rounded-2xl p-6 space-y-3">
                <CheckCircle className="w-12 h-12 text-white mx-auto" />
                <h3 className="text-xl font-bold text-white">Welcome to Our Community!</h3>
                <p className="text-white/90">
                  Thank you for subscribing. You'll receive our next newsletter soon.
                </p>
              </div>
            )}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5,000+</div>
              <div className="text-white/80">Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-white/80">Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">Monthly</div>
              <div className="text-white/80">Updates</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white/10 rounded-2xl p-6 mt-8">
            <p className="text-white/90 italic text-lg mb-4">
              "The newsletter keeps me connected to the amazing work being done. 
              It's inspiring to see the impact we're making together."
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">S</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Sarah Johnson</div>
                <div className="text-white/70 text-sm">Long-time Supporter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}