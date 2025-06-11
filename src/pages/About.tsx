import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Lightbulb,
  Award,
  BookOpen,
  Target,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Aspire Leadership Program",
      description:
        "Graduated from Aspire, focusing on tech leadership, mentorship, and innovation strategies.",
      badge: "Leadership",
    },
    {
      icon: Users,
      title: "Teaching & Mentorship",
      description:
        "Educated 500+ students in CBSE Science, Math, and Social, integrating real-world tech projects.",
      badge: "Education",
    },
    {
      icon: Lightbulb,
      title: "Research & Innovation",
      description:
        "Worked on ML-driven prototypes, IoT devices, and cross-functional team projects.",
      badge: "Research",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "Always seeking creative solutions to complex problems using cutting-edge technology.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Committed to sharing knowledge and empowering others through education and mentorship.",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description:
        "Delivering high-quality solutions that exceed expectations and drive real business value.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium mb-6"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              My Journey
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-600">
                Me
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm Ankit, a passionate software creator, freelance developer,
              educator, and Aspire Leadership Program alum.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                My Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  My journey is a blend of building impactful systems, teaching,
                  and leading research initiatives that bridge technology and
                  learning. I thrive on transforming ideas into scalable
                  solutions and empowering others through knowledge.
                </p>
                <p>
                  Starting from my engineering background in Electronics and
                  Communication, I've evolved into a full-stack developer with
                  expertise in modern web technologies, machine learning, and
                  educational technology.
                </p>
                <p>
                  What drives me is the intersection of technology and human
                  impact. Whether it's building a smart parking system, creating
                  a learning management platform, or teaching the next
                  generation of developers, I believe in technology's power to
                  make a meaningful difference.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-6">
                <span className="text-foreground font-medium">— Ankit</span>
                <div className="w-16 h-px bg-primary"></div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-brand-600/20 rounded-2xl blur-2xl"></div>
                <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-primary/10 to-brand-600/10 rounded-2xl border border-primary/20 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-brand-600/5"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Target className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Mission Driven
                      </h3>
                      <p className="text-muted-foreground px-6">
                        Bridging the gap between technology and human potential
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that have shaped my journey as a developer and educator
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What I Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-brand-600/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a full-stack application, ML solution, or want to
            discuss educational technology, I'm here to help bring your vision
            to life.
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

export default About;
