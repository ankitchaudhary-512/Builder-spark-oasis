import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Smartphone,
  Brain,
  BookOpen,
  Palette,
  Database,
  Cloud,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Development",
      description:
        "Modern, scalable web applications built with the latest technologies including React, Node.js, and cloud platforms.",
      features: [
        "Custom web application development",
        "API design and development",
        "Database architecture and optimization",
        "Performance optimization",
        "Responsive design implementation",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      startingPrice: "$2,500",
      category: "Development",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.",
      features: [
        "React Native development",
        "Cross-platform compatibility",
        "Native performance optimization",
        "App store deployment",
        "Ongoing maintenance and updates",
      ],
      technologies: ["React Native", "Expo", "Firebase", "Redux"],
      startingPrice: "$3,000",
      category: "Development",
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description:
        "AI-powered solutions including predictive analytics, natural language processing, and computer vision.",
      features: [
        "Custom ML model development",
        "Data analysis and preprocessing",
        "Model deployment and monitoring",
        "Predictive analytics",
        "Computer vision applications",
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "OpenCV"],
      startingPrice: "$1,500",
      category: "AI/ML",
    },
    {
      icon: BookOpen,
      title: "Technical Education & Training",
      description:
        "Comprehensive training programs and educational content for CBSE subjects and programming skills.",
      features: [
        "CBSE Science, Math, and Social studies",
        "Programming bootcamps",
        "One-on-one mentoring",
        "Curriculum development",
        "Educational technology consulting",
      ],
      technologies: ["Custom Curriculum", "Interactive Tools", "LMS"],
      startingPrice: "$50/hour",
      category: "Education",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Intuitive and beautiful user interfaces designed with modern principles and user-centered approach.",
      features: [
        "User interface design",
        "User experience optimization",
        "Prototyping and wireframing",
        "Design system creation",
        "Usability testing",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      startingPrice: "$800",
      category: "Design",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & DevOps",
      description:
        "Scalable cloud infrastructure setup, deployment automation, and DevOps best practices implementation.",
      features: [
        "Cloud infrastructure setup",
        "CI/CD pipeline implementation",
        "Containerization with Docker",
        "Monitoring and logging",
        "Security optimization",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      startingPrice: "$1,200",
      category: "Infrastructure",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We start with understanding your requirements, goals, and constraints to create a comprehensive project plan.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Creating wireframes, mockups, and technical architecture that aligns with your vision and best practices.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development process with regular updates, thorough testing, and quality assurance at every step.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Seamless deployment to production and ongoing support to ensure your solution continues to perform optimally.",
    },
  ];

  const categories = [
    { name: "Development", count: 2, icon: Code },
    { name: "AI/ML", count: 1, icon: Brain },
    { name: "Education", count: 1, icon: BookOpen },
    { name: "Design", count: 1, icon: Palette },
    { name: "Infrastructure", count: 1, icon: Cloud },
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
            <Zap className="w-4 h-4 mr-2" />
            What I Do
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From full-stack development to machine learning solutions and
            technical education, I provide comprehensive services to bring your
            ideas to life.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm mb-1">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.count} service{category.count > 1 ? "s" : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    {service.features.length > 3 && (
                      <p className="text-sm text-muted-foreground ml-7">
                        + {service.features.length - 3} more features
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-2">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {service.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{service.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Starting from
                      </p>
                      <p className="text-lg font-semibold text-primary">
                        {service.startingPrice}
                      </p>
                    </div>
                    <Button size="sm" className="group">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My Work Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver high-quality solutions that meet
              your needs and exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary/20">
                    <span className="text-xl font-bold text-primary">
                      {step.step}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary/20"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-brand-600/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Available for new projects
              </Badge>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently accepting new projects and would love to help bring
              your ideas to life. Let's discuss your requirements and create
              something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Get Started Today
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/work">
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
