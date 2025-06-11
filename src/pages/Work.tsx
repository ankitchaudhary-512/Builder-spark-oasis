import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Code,
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Database,
  Brain,
  Zap,
  ChevronRight,
  Filter,
} from "lucide-react";
import Layout from "@/components/Layout";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Smart Parking System",
      description:
        "An IoT-based prototype using sensors and machine learning algorithms to optimize real-time parking workflows and reduce urban congestion.",
      category: "iot",
      tags: ["IoT", "Machine Learning", "Python", "Arduino"],
      features: [
        "Real-time parking space detection",
        "ML-based occupancy prediction",
        "Mobile app integration",
        "Analytics dashboard",
      ],
      tech: ["Python", "TensorFlow", "Arduino", "React Native"],
      icon: Zap,
      status: "Completed",
    },
    {
      id: 2,
      title: "Smart Meter System",
      description:
        "Intelligent energy metering system with cloud-based analytics for energy optimization and consumption monitoring.",
      category: "embedded",
      tags: ["Embedded", "IoT", "Cloud", "Analytics"],
      features: [
        "Real-time energy monitoring",
        "Cloud-based data analytics",
        "Automated billing system",
        "Energy consumption insights",
      ],
      tech: ["C++", "AWS IoT", "MongoDB", "React"],
      icon: Database,
      status: "Completed",
    },
    {
      id: 3,
      title: "React Learning Management System",
      description:
        "Comprehensive LMS built with React and Firebase, featuring real-time feedback, course management, and progress tracking.",
      category: "web",
      tags: ["React", "Firebase", "Education", "Real-time"],
      features: [
        "Course creation and management",
        "Real-time student feedback",
        "Progress tracking and analytics",
        "Interactive assignments",
      ],
      tech: ["React", "Firebase", "Material-UI", "Node.js"],
      icon: Globe,
      status: "Completed",
    },
    {
      id: 4,
      title: "ML Document Classifier",
      description:
        "Advanced document classification system using natural language processing and machine learning algorithms.",
      category: "ml",
      tags: ["Machine Learning", "NLP", "Python", "Scikit-learn"],
      features: [
        "Automated document categorization",
        "Multi-format support",
        "High accuracy classification",
        "Batch processing capabilities",
      ],
      tech: ["Python", "Scikit-learn", "NLTK", "Flask"],
      icon: Brain,
      status: "Completed",
    },
    {
      id: 5,
      title: "Portfolio Generator",
      description:
        "Automated static site builder specifically designed for freelancers to create professional portfolios quickly.",
      category: "web",
      tags: ["Static Site", "Generator", "Templates", "Freelancer"],
      features: [
        "Template-based generation",
        "SEO optimization",
        "Responsive design",
        "Easy customization",
      ],
      tech: ["Gatsby", "React", "GraphQL", "Netlify"],
      icon: Code,
      status: "Open Source",
    },
    {
      id: 6,
      title: "CBSE Teaching Portal",
      description:
        "Interactive educational portal for CBSE students with resource management and progress tracking capabilities.",
      category: "web",
      tags: ["Education", "CBSE", "Portal", "Progress Tracking"],
      features: [
        "Student resource library",
        "Progress tracking system",
        "Interactive quizzes",
        "Teacher dashboard",
      ],
      tech: ["React", "Node.js", "MySQL", "Express"],
      icon: Smartphone,
      status: "In Use",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "web",
      name: "Web Development",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "ml",
      name: "Machine Learning",
      count: projects.filter((p) => p.category === "ml").length,
    },
    {
      id: "iot",
      name: "IoT & Hardware",
      count: projects.filter((p) => p.category === "iot").length,
    },
    {
      id: "embedded",
      name: "Embedded Systems",
      count: projects.filter((p) => p.category === "embedded").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4 mr-2" />
            Portfolio
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-600">
              Work
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my expertise in full-stack
            development, machine learning, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                Filter by category:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-xs"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {project.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="group">
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold text-foreground">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 mt-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-3">
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create innovative
            solutions. Let's discuss your project and bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                Start a Project
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
