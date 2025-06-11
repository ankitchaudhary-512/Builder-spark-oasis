import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  GraduationCap,
  Users,
  Lightbulb,
  Smartphone,
  BookOpen,
  FileText,
  Palette,
  ChevronDown,
  X,
  Send,
} from "lucide-react";

const Index = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-portfolio-50 to-portfolio-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-portfolio-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-portfolio-900">Ankit</div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-portfolio-700 hover:text-brand-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-portfolio-700 hover:text-brand-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="text-portfolio-700 hover:text-brand-600 transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-portfolio-700 hover:text-brand-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("resume")}
                className="text-portfolio-700 hover:text-brand-600 transition-colors"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-portfolio-700 hover:text-brand-600 transition-colors"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-portfolio-700 hover:text-brand-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-portfolio-900">
                  Hi, I'm <span className="text-brand-600">Ankit</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-portfolio-700">
                  Developer
                </h2>
                <p className="text-lg text-portfolio-600 max-w-xl leading-relaxed">
                  Tech Creator | Freelancer | Educator in Software Development,
                  ML, and Fullstack Systems. Aspire Leadership Program Alumni.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-6 text-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Hire Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-brand-600 text-brand-600 hover:bg-brand-50 px-8 py-6 text-lg"
                  onClick={() => scrollToSection("work")}
                >
                  View Work
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-portfolio-300 text-portfolio-700 hover:bg-portfolio-50 px-8 py-6 text-lg"
                  onClick={() => scrollToSection("resume")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full opacity-20 absolute -inset-4"></div>
                <div className="w-72 h-72 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center">
                  <Code className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex flex-col items-center text-portfolio-600 hover:text-brand-600 transition-colors group"
            >
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ChevronDown className="w-6 h-6 animate-bounce-slow" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-900 mb-4">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-portfolio-600 leading-relaxed">
                I'm Ankit, a passionate software creator, freelance developer,
                educator, and Aspire Leadership Program alum. My journey is a
                blend of building impactful systems, teaching, and leading
                research initiatives that bridge technology and learning. I
                thrive on transforming ideas into scalable solutions and
                empowering others through knowledge.
              </p>

              <div className="grid gap-6">
                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="bg-brand-100 p-3 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-portfolio-900 mb-2">
                        Aspire Leadership Program
                      </h3>
                      <p className="text-portfolio-600">
                        Graduated from Aspire, focusing on tech leadership,
                        mentorship, and innovation strategies.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="bg-brand-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-portfolio-900 mb-2">
                        Teaching & Mentorship
                      </h3>
                      <p className="text-portfolio-600">
                        Educated 500+ students in CBSE Science, Math, and
                        Social, integrating real-world tech projects.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-brand-500">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="bg-brand-100 p-3 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-portfolio-900 mb-2">
                        Research & Internships
                      </h3>
                      <p className="text-portfolio-600">
                        Worked on ML-driven prototypes, IoT devices, and
                        cross-functional team projects.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center space-x-4 pt-6">
                <span className="text-portfolio-700 font-medium">— Ankit</span>
                <div className="w-16 h-px bg-brand-600"></div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-brand-400 to-brand-600 opacity-20 flex items-center justify-center">
                    <Code className="w-48 h-48 text-brand-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work & Projects Section */}
      <section id="work" className="py-20 px-6 bg-portfolio-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-900 mb-4">
              Work & Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-portfolio-900">
                    Smart Parking System
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-brand-100 text-brand-700"
                  >
                    IoT
                  </Badge>
                </div>
                <p className="text-portfolio-600 mb-4">
                  Prototype using sensors and ML to optimize real-time parking
                  workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Software Developer
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Research
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-portfolio-900">
                    Smart Meter
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-brand-100 text-brand-700"
                  >
                    Embedded
                  </Badge>
                </div>
                <p className="text-portfolio-600 mb-4">
                  Intelligent metering system with cloud-based analytics for
                  energy optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Embedded
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Electronics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-portfolio-900">
                    React LMS
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-brand-100 text-brand-700"
                  >
                    Web
                  </Badge>
                </div>
                <p className="text-portfolio-600 mb-4">
                  Learning Management System powered by React and Firebase with
                  real-time feedback.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Web Developer
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    UI/UX
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-portfolio-900">
                    Diploma in ECE
                  </h3>
                  <Badge
                    variant="secondary"
                    className="bg-brand-100 text-brand-700"
                  >
                    Education
                  </Badge>
                </div>
                <p className="text-portfolio-600 mb-4">
                  Engineering projects and research as part of Electronics and
                  Communication studies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Internship
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    R&D
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <Dialog
                  open={isProjectModalOpen}
                  onOpenChange={setIsProjectModalOpen}
                >
                  <DialogTrigger asChild>
                    <button className="text-brand-600 font-semibold text-lg hover:text-brand-700 transition-colors">
                      + More Projects
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-portfolio-900">
                        More Projects
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 mt-6">
                      <div className="border-b border-portfolio-200 pb-4">
                        <h3 className="font-semibold text-portfolio-900 mb-2">
                          ML Document Classifier
                        </h3>
                        <p className="text-portfolio-600">
                          Text-based classification using Python & Scikit-learn.
                        </p>
                      </div>
                      <div className="border-b border-portfolio-200 pb-4">
                        <h3 className="font-semibold text-portfolio-900 mb-2">
                          Portfolio Generator
                        </h3>
                        <p className="text-portfolio-600">
                          Automated static site builder for freelancers.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-portfolio-900 mb-2">
                          CBSE Teaching Portal
                        </h3>
                        <p className="text-portfolio-600">
                          Interactive portal for student resources and progress
                          tracking.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-900 mb-4">
              What I Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-portfolio-900 mb-4">
                Web & Mobile App Development
              </h3>
              <p className="text-portfolio-600">
                Fullstack solutions, APIs, and cross-platform apps with modern
                stacks.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-portfolio-900 mb-4">
                Teaching (CBSE Science, Math, Social)
              </h3>
              <p className="text-portfolio-600">
                Engaging lessons with real-world project integration.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-portfolio-900 mb-4">
                R&D / Documentation
              </h3>
              <p className="text-portfolio-600">
                Building prototypes, technical writing, and publishing.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-portfolio-900 mb-4">
                UI/UX Design (React, Figma)
              </h3>
              <p className="text-portfolio-600">
                Intuitive, aesthetic interfaces for web and mobile.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-brand-600 font-medium">
              Open for remote projects & collaboration!
            </p>
          </div>
        </div>
      </section>

      {/* Resume & Skills Section */}
      <section id="resume" className="py-20 px-6 bg-portfolio-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-900 mb-4">
              Resume & Skills
            </h2>
            <Button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-portfolio-900 mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "React",
                  "Node.js",
                  "Python",
                  "MongoDB",
                  "TypeScript",
                  "AWS",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="bg-brand-100 p-4 rounded-lg text-center"
                  >
                    <div className="w-12 h-12 bg-brand-200 rounded-full mx-auto mb-2"></div>
                    <span className="text-sm font-medium text-portfolio-700">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-portfolio-900 mb-6">
                Skills
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-900">
                      Fullstack Development
                    </span>
                    <span className="text-portfolio-600">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-900">
                      Machine Learning
                    </span>
                    <span className="text-portfolio-600">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-900">
                      UI/UX Design
                    </span>
                    <span className="text-portfolio-600">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-900">
                      Teaching & Mentoring
                    </span>
                    <span className="text-portfolio-600">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-900 mb-4">
              Insights & Blog
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-portfolio-900 mb-3">
                  Web Development Experience
                </h3>
                <p className="text-portfolio-600 text-sm leading-relaxed">
                  Lessons from building scalable web apps and freelance
                  platforms using React, Node, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-portfolio-900 mb-3">
                  Teaching Reflections
                </h3>
                <p className="text-portfolio-600 text-sm leading-relaxed">
                  How education and real-world projects shape a growth mindset
                  in both students and mentors.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-portfolio-900 mb-3">
                  Leadership Journey
                </h3>
                <p className="text-portfolio-600 text-sm leading-relaxed">
                  Insights from the Aspire Program and leading cross-functional
                  teams.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-portfolio-900 mb-3">
                  Project Walkthroughs
                </h3>
                <p className="text-portfolio-600 text-sm leading-relaxed">
                  Technical deep-dives and behind-the-scenes stories from my
                  favorite projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-portfolio-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-900 mb-4">
              Let's Build Something Amazing!
            </h2>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-12 text-lg"
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 text-lg"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-32 text-lg resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portfolio-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="bg-portfolio-800 p-3 rounded-full hover:bg-brand-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-portfolio-800 p-3 rounded-full hover:bg-brand-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-portfolio-800 p-3 rounded-full hover:bg-brand-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-portfolio-400">
            © 2024 Ankit. Built with passion and modern tech.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
