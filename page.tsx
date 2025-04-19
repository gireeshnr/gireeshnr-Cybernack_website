import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroSection from '../components/hero-section';
import FeatureCard from '../components/feature-card';
import PricingCard from '../components/pricing-card';
import TestimonialCard from '../components/testimonial-card';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar transparent={true} />
      
      {/* Hero Section */}
      <HeroSection 
        title="Strengthen Your Organization's Cyber Defense"
        subtitle="An easy-to-use platform that delivers professional-grade cybersecurity awareness tools without the complexity"
        ctaText="Start Free Trial"
        ctaLink="/signup"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#features"
      />
      
      {/* Trusted By Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container-custom">
          <h2 className="text-center text-white text-xl mb-8">Trusted by organizations of all sizes</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* Placeholder for client logos */}
            <div className="h-12 w-32 bg-white/10 rounded"></div>
            <div className="h-12 w-32 bg-white/10 rounded"></div>
            <div className="h-12 w-32 bg-white/10 rounded"></div>
            <div className="h-12 w-32 bg-white/10 rounded"></div>
          </div>
        </div>
      </section>
      
      {/* Problem Statement Section */}
      <section className="section bg-primary" id="problem">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">The Growing Cybersecurity Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Increasing cyber threats target unprepared employees"
              description="Cyber attacks are becoming more sophisticated, targeting the human element of security through social engineering and phishing."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              }
            />
            <FeatureCard 
              title="Traditional security training is ineffective"
              description="Most training programs are boring, time-consuming, and fail to engage employees, resulting in poor retention and compliance."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              }
            />
            <FeatureCard 
              title="Organizations lack visibility into security awareness"
              description="Without proper metrics and analytics, it's difficult to measure the effectiveness of security training and identify areas for improvement."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="section bg-secondary" id="features">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Introducing Cybernack</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">The comprehensive cybersecurity awareness platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FeatureCard 
              title="Easy-to-use Interface"
              description="Intuitive platform that requires minimal training for both administrators and end-users."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <FeatureCard 
              title="Comprehensive Training"
              description="Engaging modules covering all aspects of cybersecurity awareness, from phishing to password security."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
            />
            <FeatureCard 
              title="Detailed Analytics"
              description="Comprehensive reporting and analytics to track progress and identify areas for improvement."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />
          </div>
          
          {/* Platform Screenshot */}
          <div className="bg-primary/30 p-4 rounded-lg shadow-lg">
            <div className="aspect-video bg-primary/50 rounded-md flex items-center justify-center">
              <p className="text-white text-lg">Platform Interface Preview</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Tiers Section */}
      <section className="section bg-primary" id="pricing">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose the Plan That's Right for You</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Flexible pricing options to meet your organization's needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              tier="Free"
              price="$0"
              description="Basic features to help small businesses get started with cybersecurity awareness."
              features={[
                "Limited set of modules",
                "Basic reporting",
                "Community support",
                "Up to 10 users"
              ]}
              ctaText="Sign Up Free"
              ctaLink="/signup"
            />
            
            <PricingCard 
              tier="Standard"
              price="$5"
              description="Enhanced features for growing organizations with more advanced needs."
              features={[
                "All Free features",
                "Enhanced modules",
                "Advanced reporting",
                "Priority email support",
                "Additional customization options"
              ]}
              ctaText="Start Free Trial"
              ctaLink="/signup"
              isHighlighted={true}
            />
            
            <PricingCard 
              tier="Enterprise"
              price="Contact Us"
              description="Comprehensive solution for organizations with complex security requirements."
              features={[
                "All Standard features",
                "Premium support (phone and live chat)",
                "Enterprise system integrations",
                "Advanced analytics",
                "Custom module options"
              ]}
              ctaText="Contact Sales"
              ctaLink="/contact"
            />
          </div>
          
          <div className="text-center mt-8">
            <a href="/pricing" className="text-accent hover:underline">Compare All Features</a>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="section bg-secondary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
              quote="Cybernack has transformed our security awareness program. Our employees are now actively engaged in security practices, and we've seen a significant reduction in security incidents."
              name="Jane Smith"
              position="CIO"
              company="Tech Solutions Inc."
            />
            
            <TestimonialCard 
              quote="The platform is incredibly easy to use, both for our IT team and our employees. The analytics provide valuable insights that help us continuously improve our security posture."
              name="John Doe"
              position="IT Director"
              company="Global Services Ltd."
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="section bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Strengthen Your Cyber Defense?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">Get started with Cybernack today</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/signup" className="btn-primary">Start Free Trial</a>
            <a href="/contact" className="btn-outline">Contact Sales</a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
