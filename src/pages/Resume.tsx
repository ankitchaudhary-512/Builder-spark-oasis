import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";

const Resume = () => {
  const skills = [
    { name: "Full Stack Development", level: 95, category: "Technical" },
    { name: "Machine Learning", level: 85, category: "Technical" },
    { name: "React & Node.js", level: 90, category: "Technical" },
    { name: "Python & Data Science", level: 88, category: "Technical" },
    { name: "UI/UX Design", level: 80, category: "Design" },
    { name: "Teaching & Mentoring", level: 90, category: "Soft Skills" },
    { name: "Project Management", level: 85, category: "Soft Skills" },
    { name: "Technical Writing", level: 82, category: "Communication" },
  ];

  const experience = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      duration: "2022 - Present",
      location: "Remote",
      description:
        "Developed custom web applications and ML solutions for various clients, focusing on scalable architecture and modern technologies.",
      achievements: [
        "Built 15+ full-stack applications using React, Node.js, and cloud platforms",
        "Implemented ML solutions that improved client business metrics by 30%",
        "Maintained 98% client satisfaction rate across all projects",
        "Led development teams of 3-5 developers on complex projects",
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "PostgreSQL"],
    },
    {
      title: "CBSE Subject Teacher",
      company: "Multiple Educational Institutions",
      duration: "2020 - 2023",
      location: "India",
      description:
        "Taught Science, Mathematics, and Social Studies to 500+ students while integrating technology and real-world applications.",
      achievements: [
        "Improved student performance by 40% through innovative teaching methods",
        "Developed interactive digital content and educational tools",
        "Mentored students in programming and technology projects",
        "Created curriculum that bridges academic concepts with practical applications",
      ],
      technologies: ["Educational Technology", "LMS", "Interactive Tools"],
    },
    {
      title: "Research Intern",
      company: "Tech Innovation Lab",
      duration: "2021 - 2022",
      location: "India",
      description:
        "Worked on IoT projects and ML-driven prototypes, focusing on smart city solutions and embedded systems.",
      achievements: [
        "Developed smart parking system prototype with 85% accuracy",
        "Published research on IoT applications in smart city infrastructure",
        "Collaborated with cross-functional teams on embedded system projects",
        "Presented findings at national technology conferences",
      ],
      technologies: ["Arduino", "IoT", "Machine Learning", "Python"],
    },
  ];

  const education = [
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "Government Polytechnic",
      duration: "2018 - 2021",
      grade: "First Class with Distinction",
      description:
        "Specialized in embedded systems, electronics design, and communication protocols.",
    },
    {
      degree: "Aspire Leadership Program",
      institution: "Aspire Foundation",
      duration: "2022",
      grade: "Certificate of Excellence",
      description:
        "Focused on tech leadership, innovation strategies, and mentorship development.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "ASA-2023-001",
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Stanford University / Coursera",
      year: "2022",
      credentialId: "ML-SPEC-2022",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2023",
      credentialId: "REACT-2023-456",
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      year: "2022",
      credentialId: "GA-2022-789",
    },
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "Express", "Django", "FastAPI"],
    },
    {
      category: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      category: "AI/ML",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "Pandas",
      ],
    },
    {
      category: "Mobile",
      technologies: ["React Native", "Expo", "Flutter", "iOS", "Android"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium mb-6"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Professional Resume
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500">
                  Ankit
                </span>{" "}
                Kumar
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                Full Stack Developer & Tech Educator
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Passionate software creator with expertise in full-stack
                development, machine learning, and educational technology.
                Committed to building scalable solutions and empowering others
                through knowledge sharing.
              </p>
              <Button size="lg" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Resume
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <Card className="h-fit">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">
                      ankit@example.com
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">
                      +91 9876543210
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">India</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">
                      ankitportfolio.dev
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {job.company}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {job.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {job.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Core Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {skill.category}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Technology Stack
                </h3>
                <div className="space-y-6">
                  {techStack.map((stack, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-foreground mb-3">
                        {stack.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {stack.technologies.map((tech) => (
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
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
            Education & Certifications
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.duration}
                      </div>
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {edu.grade}
                      </Badge>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {cert.name}
                          </h4>
                          <p className="text-primary text-sm font-medium mb-1">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Credential ID: {cert.credentialId}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and challenging projects.
            Let's discuss how I can contribute to your team or project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                Get In Touch
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
      </section>
    </Layout>
  );
};

export default Resume;
