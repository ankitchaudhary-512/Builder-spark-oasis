import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  Github,
  Linkedin,
  Globe,
  Calendar,
  Zap,
} from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    project: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        project: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "ankit@example.com",
      description: "Drop me a line anytime",
      href: "mailto:ankit@example.com",
      available: "24/7",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9876543210",
      description: "Call for urgent matters",
      href: "tel:+919876543210",
      available: "9 AM - 8 PM IST",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+91 9876543210",
      description: "Quick questions & updates",
      href: "https://wa.me/919876543210",
      available: "9 AM - 10 PM IST",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/ankit",
      username: "@ankit",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/ankit",
      username: "in/ankit",
    },
    {
      icon: Globe,
      name: "Portfolio",
      href: "https://ankitportfolio.dev",
      username: "ankitportfolio.dev",
    },
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "Machine Learning Solution",
    "E-commerce Platform",
    "Educational Technology",
    "IoT Project",
    "API Development",
    "Consulting",
    "Other",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Let's discuss",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium mb-6"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-600">
              Amazing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Need a technical consultation? Or just want
            to say hello? I'd love to hear from you and discuss how we can work
            together.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Ways to Reach Me
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <a
                    href={method.href}
                    className="text-primary font-medium hover:underline block mb-2"
                  >
                    {method.value}
                  </a>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {method.available}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Start Your Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and I'll get back to you within 24 hours
            </p>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 dark:bg-green-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll review your message and get
                    back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company/Organization
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name (optional)"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full h-12 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      required
                      className="min-h-32 resize-none"
                    />
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-primary" />
                      What happens next?
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>
                        • I'll review your project details within 24 hours
                      </li>
                      <li>
                        • We'll schedule a call to discuss your requirements
                      </li>
                      <li>• I'll provide a detailed proposal and timeline</li>
                      <li>• We can start building your solution immediately</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Connect With Me
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="w-20 h-20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/20">
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {social.username}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  How quickly can you start my project?
                </h3>
                <p className="text-sm text-muted-foreground">
                  I typically can start new projects within 1-2 weeks, depending
                  on my current workload and project complexity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Do you work with international clients?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! I work with clients globally and am comfortable
                  with different time zones and communication preferences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  What's your development process like?
                </h3>
                <p className="text-sm text-muted-foreground">
                  I follow an agile approach with regular updates, milestone
                  reviews, and continuous client collaboration throughout the
                  project.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Do you provide post-launch support?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes, I offer ongoing maintenance, updates, and support
                  packages to ensure your application continues to run smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
