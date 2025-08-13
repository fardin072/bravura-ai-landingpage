import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { ArrowRight, CheckCircle, Star, Users, Zap, BarChart3, Shield, Globe, Target, TrendingUp, Award } from "lucide-react";
import { useEffect, useState } from "react";

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();

  // Auto-scroll for adopters section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 8);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll for testimonials
  useEffect(() => {
    if (!testimonialApi) return;

    const interval = setInterval(() => {
      testimonialApi.scrollNext();
    }, 4000); // 4 seconds for testimonials

    return () => clearInterval(interval);
  }, [testimonialApi]);

  const adoptersLogos = [
    "https://i.ibb.co.com/xKmr8nZh/merck-logo-png-transparent.png",
    "https://i.ibb.co.com/xKmr8nZh/merck-logo-png-transparent.png",
    "https://i.ibb.co.com/xKmr8nZh/merck-logo-png-transparent.png",
    "https://i.ibb.co.com/xKmr8nZh/merck-logo-png-transparent.png",
    "https://i.ibb.co.com/xKmr8nZh/merck-logo-png-transparent.png",
    "https://i.ibb.co.com/xKmr8nZh/merck-logo-png-transparent.png",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Bravura-AI has revolutionized how we approach data analytics. The insights we gain are incredible.",
      avatar: "https://images.pexels.com/photos/33393705/pexels-photo-33393705.jpeg?h=100&w=100&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations, DataFlow",
      content: "The automation capabilities have saved us countless hours while improving accuracy dramatically.",
      avatar: "https://images.pexels.com/photos/33393705/pexels-photo-33393705.jpeg?h=100&w=100&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Analytics, InnovateNow",
      content: "Outstanding platform. The visualizations and reports are exactly what our team needed.",
      avatar: "https://images.pexels.com/photos/33393705/pexels-photo-33393705.jpeg?h=100&w=100&fit=crop"
    }
  ];

  const keySteps = [
    { description: "Bringing all the static and streaming data together in a single location, while preserving the relational information.", imagelink: "https://i.ibb.co.com/4gnkV6hn/PPUv3.jpg" },
    { description: "Stores data in a standardized fashion that decouples the dependency from a single system and allows for migrations.", imagelink: "https://i.ibb.co.com/4gnkV6hn/PPUv3.jpg" },
    { description: "Resolve dynamic references, remove dead references, scrub orphaned objects and files etc. until only objects and data remain that is relevant and actively in use.", imagelink: "https://i.ibb.co.com/4gnkV6hn/PPUv3.jpg" },
    { description: "Visualization of configuration data using the process design and system configuration data, offering insights and context.", imagelink: "https://i.ibb.co.com/4gnkV6hn/PPUv3.jpg" },
    { description: "Automating reports saves skilled staff time, cuts costs, and improves accuracy by reducing manual work and errors—letting experts focus on analysis and strategy that drive growth.", imagelink: "https://i.ibb.co.com/4gnkV6hn/PPUv3.jpg" }
  ];

  const elevateCards = [
    { title: "Centralized Data", description: "All your data sources in one unified platform", icon: <Globe className="h-6 w-6" /> },
    { title: "Standardized Processes", description: "Consistent workflows across your organization", icon: <CheckCircle className="h-6 w-6" /> },
    { title: "Optimized Performance", description: "Enhanced efficiency through intelligent automation", icon: <TrendingUp className="h-6 w-6" /> },
    { title: "Automated Workflows", description: "Streamlined operations with minimal manual intervention", icon: <Zap className="h-6 w-6" /> },
    { title: "Visual Analytics", description: "Interactive dashboards and comprehensive reports", icon: <BarChart3 className="h-6 w-6" /> },
    { title: "Secure Infrastructure", description: "Enterprise-grade security for your sensitive data", icon: <Shield className="h-6 w-6" /> },
    { title: "Real-time Monitoring", description: "Live insights and instant alerting capabilities", icon: <Target className="h-6 w-6" /> },
    { title: "Custom Solutions", description: "Tailored implementations for your specific needs", icon: <Award className="h-6 w-6" /> }
  ];

  const challenges = [
    "Data scattered across multiple platforms and systems",
    "Inconsistent reporting formats and methodologies",
    "Manual processes consuming valuable team resources",
    "Lack of real-time visibility into business operations",
    "Difficulty in identifying trends and patterns",
    "Poor collaboration between departments and teams",
    "Inefficient resource allocation and planning",
    "Limited scalability of current analytics solutions",
    "Compliance and governance challenges",
    "High costs associated with multiple tool subscriptions"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: ["Up to 5 data sources", "Basic analytics", "Standard support", "10GB storage"]
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      features: ["Unlimited data sources", "Advanced analytics", "Priority support", "100GB storage"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      features: ["Custom integrations", "White-label options", "Dedicated support", "Unlimited storage"]
    },
    {
      name: "Custom",
      price: "Contact",
      period: "us",
      features: ["Fully customized solution", "On-premise deployment", "24/7 support", "Custom features"]
    }
  ];

  const caseStudies = [
    {
      title: "TechCorp's Digital Transformation",
      description: "How TechCorp increased efficiency by 300% using Bravura-AI's automated reporting capabilities.",
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?w=400&h=250&fit=crop",
      results: "300% efficiency increase"
    },
    {
      title: "DataFlow's Analytics Revolution",
      description: "Revolutionizing decision-making processes with real-time data insights and predictive analytics.",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?w=400&h=250&fit=crop",
      results: "50% faster decisions"
    },
    {
      title: "InnovateNow's Growth Story",
      description: "Scaling operations seamlessly while maintaining data quality and compliance standards.",
      image: "https://images.pexels.com/photos/33393705/pexels-photo-33393705.jpeg?w=400&h=250&fit=crop",
      results: "200% revenue growth"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bravura-50 to-white">
      {/* 1. Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-bravura-900 leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-bravura-600 to-bravura-800 bg-clip-text text-transparent">
                  Intelligent Analytics
                </span>
              </h1>
              <p className="text-xl text-bravura-700 leading-relaxed">
                Bravura-AI reduces risk, accelerates time-to-market, and optimizes resources. Unified data is no longer a ‘nice-to-have’—it’s the foundation of operational AI that actually delivers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-bravura-600 hover:bg-bravura-700 text-lg px-8 py-6">
                  <ArrowRight className="ml-2 h-5 w-5" />
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-bravura-400/20 to-bravura-600/20 blur-3xl"></div>
              <img
                src="https://i.ibb.co.com/23T73VKB/hero-img.jpg?w=600&h=400&fit=crop"
                alt="AI Analytics Dashboard"
                className="relative rounded-2xl shadow-2xl border border-bravura-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solve Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bravura-900 mb-4">
              What Problems Does Bravura-AI Solve?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-bravura-200 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="text-bravura-900">Reducing time to market</CardTitle>
                <br />
                <CardDescription>
                  Process Plant Unity was introduced to handle all data associated with configuration and validation. This relieved the technicians of these tasks, which accelerated the pace of commissioning by well over 2X.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-bravura-600 hover:text-bravura-800 px-4 py-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-bravura-200 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="text-bravura-900">Risk Reduction</CardTitle>
                <br />
                <CardDescription>
                  Unplanned shutdowns in heavy industry can cost upwards of $1,000,000 per day — Bravura-AI's system helps eliminate those risks before they occur.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-bravura-600 hover:text-bravura-800 px-4 py-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-bravura-200 hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="text-bravura-900">Resource Reduction</CardTitle>
                <br />
                <CardDescription>
                  The decommissioning project was completed with minimal field resources, saving over 50% of projected costs compared to traditional contractor-led methods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-bravura-600 hover:text-bravura-800 px-4 py-0">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Early Adopters Section */}
      <section className="py-20 bg-bravura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bravura-900 mb-4">Early Adopters</h2>
            <p className="text-xl text-bravura-600">Trusted by leading organizations worldwide</p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-left">
              {[...adoptersLogos, ...adoptersLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <img
                    src={logo}
                    alt={`Company ${(index % adoptersLogos.length) + 1}`}
                    className="w-40 h-24 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bravura-900 mb-4">Customer Testimonials</h2>
            <p className="text-xl text-bravura-600">Hear what our customers have to say</p>
          </div>
          <Carousel
            className="max-w-4xl mx-auto"
            setApi={setTestimonialApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-bravura-200">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-bravura-800 mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <div className="font-semibold text-bravura-900">{testimonial.name}</div>
                          <div className="text-bravura-600">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* 5. What Bravura-AI Does */}
      <section className="py-20 bg-bravura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-10 gap-16 items-center">
            <div className="space-y-6 col-span-4">
              <p className="text-lg text-bravura-700 leading-relaxed">
                Bravura-AI Empowers Engineers of Tomorrow in the Process Manufacturing Industry. Breaking down barriers and eliminating data silos, empowering engineers, and technicians with a unified vision of the entire plant’s design data — creating the gateway to Agentic AI.
              </p>
            </div>
            <div className="relative col-span-6">
              <div className="absolute inset-0 bg-gradient-to-r from-bravura-400/20 to-bravura-600/20 blur-2xl"></div>
              <img
                src="https://i.ibb.co.com/4gnkV6hn/PPUv3.jpg?w=600&h=400&fit=crop"
                alt="Analytics Dashboard"
                className="relative rounded-2xl shadow-xl border border-bravura-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Five Key Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bravura-900 mb-4">
              The Five Key Steps of Bravura-AI
            </h2>
            <p className="text-xl text-bravura-600">Hover to learn more.</p>
          </div>

          <div className="flex flex-row justify-center items-center gap-8">
            {keySteps.map((step, index) => (
              <div key={index} className="text-center group relative w-fit mx-auto">

                {/* Image container with hover overlay */}
                <div
                  className="relative overflow-hidden mb-4 animate-wave"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Image */}
                  <img
                    className="w-full rounded-sm h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    src={step.imagelink}
                    alt={step.description}
                  />

                  {/* Overlay */}
                  <div className="absolute rounded-sm inset-0 bg-[#325b73] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold px-4 text-center">
                      {step.description || "More details about this step."}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 7. Elevate Section */}
      <section className="py-20 bg-bravura-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Elevate Your Team with Centralized, Standardized, Optimized, Automated and Visualized Reports
            </h2>
            <p className="text-xl text-bravura-200">
              Comprehensive solutions for modern business challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {elevateCards.map((card, index) => (
              <Card key={index} className="bg-bravura-800 border-bravura-700 text-white hover:bg-bravura-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="text-bravura-300 mb-2">{card.icon}</div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-bravura-300">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Common Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bravura-400/20 to-bravura-600/20 blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/33393705/pexels-photo-33393705.jpeg?w=600&h=400&fit=crop"
                alt="Team Collaboration"
                className="relative rounded-2xl shadow-xl border border-bravura-200"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-bravura-900">Unify Your Operations</h2>
              <p className="text-lg text-bravura-700 leading-relaxed">
                Transform disconnected processes into a cohesive, intelligent system that grows with your business.
                Our platform eliminates the complexity of managing multiple tools and data sources,
                creating a single source of truth for your organization. Experience seamless collaboration
                across departments, automatic data synchronization, and intelligent workflows that adapt
                to your unique business requirements. With enterprise-grade security and scalability built-in,
                you can confidently expand your operations while maintaining complete control over your data.
                Join thousands of organizations who have already transformed their operations with our
                proven methodology and cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Recognizable Challenges */}
      <section className="py-20 bg-bravura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bravura-900 mb-4">Examples of Recognizable Challenges</h2>
            <p className="text-xl text-bravura-600">Common issues we help organizations overcome</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="h-6 w-6 text-bravura-600 mt-0.5 flex-shrink-0" />
                  <p className="text-bravura-800">{challenge}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bravura-400/20 to-bravura-600/20 blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?w=600&h=400&fit=crop"
                alt="Business Challenges"
                className="relative rounded-2xl shadow-xl border border-bravura-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bravura-900 mb-4">Pricing That Empowers, Not Restricts</h2>
            <p className="text-xl text-bravura-600">Choose the plan that fits your organization's needs</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="grid md:grid-cols-2 gap-6">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative border-bravura-200 hover:shadow-lg transition-shadow ${plan.popular ? 'ring-2 ring-bravura-600 scale-105' : ''
                  }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-bravura-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-bravura-900">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-bravura-600">
                      {plan.price}<span className="text-lg text-bravura-500">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-bravura-600" />
                        <span className="text-bravura-700">{feature}</span>
                      </div>
                    ))}
                    <Button
                      className={`w-full mt-6 ${plan.popular
                          ? 'bg-bravura-600 hover:bg-bravura-700'
                          : 'bg-bravura-100 text-bravura-700 hover:bg-bravura-200'
                        }`}
                    >
                      {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bravura-400/20 to-bravura-600/20 blur-2xl"></div>
              <img
                src="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?w=600&h=500&fit=crop"
                alt="Pricing Benefits"
                className="relative rounded-2xl shadow-xl border border-bravura-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Case Studies */}
      <section id="case-studies" className="py-20 bg-bravura-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bravura-900 mb-4">Our Case Studies</h2>
            <p className="text-xl text-bravura-600">Real results from real customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-bravura-200 hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-bravura-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.results}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-bravura-900">{study.title}</CardTitle>
                  <CardDescription className="text-bravura-600">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-bravura-600 hover:text-bravura-800 p-0">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-bravura-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-bravura-200 mb-8 leading-relaxed">
            Join thousands of organizations who have already transformed their operations with Bravura-AI.
            Start your free trial today and experience the power of intelligent analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-bravura-900 hover:bg-bravura-50 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-bravura-300 text-white hover:bg-bravura-800 text-lg px-8 py-6" style={{ backgroundColor: '#0f0f3d' }}>
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bravura-950 text-bravura-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-bravura-800 mt-12 pt-8 text-center">
            <p>&copy; 2024 Bravura-AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
