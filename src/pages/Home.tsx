import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Download, ChevronRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[90vh] px-6 py-20 bg-gradient-to-br from-background via-purple-500/5 to-cyan-500/10 dark:from-background dark:via-purple-900/20 dark:to-cyan-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20"
                >
                  <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                  Available for freelance work
                </Badge>

                <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500">
                    Ankit
                  </span>
                </h1>

                <h2 className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  Full Stack Developer
                </h2>

                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Tech Creator | Freelancer | Educator in Software Development,
                  ML, and Fullstack Systems. Aspire Leadership Program Alumni.
                  Transforming ideas into scalable solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-6 text-lg group shadow-lg shadow-purple-500/25"
                  >
                    Hire Me
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link to="/work">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500/30 text-foreground hover:bg-purple-500/10 hover:border-purple-500/50 px-8 py-6 text-lg transition-all duration-300"
                  >
                    View Work
                  </Button>
                </Link>

                <Link to="/resume">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cyan-500/30 text-muted-foreground hover:bg-cyan-500/10 hover:border-cyan-500/50 px-8 py-6 text-lg transition-all duration-300"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Resume
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">
                    Students Taught
                  </div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Built
                  </div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="relative w-80 h-80 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-full border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-600 via-cyan-600 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                    <Code className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            What I Bring to the Table
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Full Stack Development
              </h3>
              <p className="text-muted-foreground">
                Modern web applications with React, Node.js, and cloud
                technologies
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Machine Learning
              </h3>
              <p className="text-muted-foreground">
                AI-powered solutions and data-driven insights for business
                growth
              </p>
            </div>

            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Education & Mentoring
              </h3>
              <p className="text-muted-foreground">
                Teaching and empowering the next generation of developers
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/about">
              <Button variant="outline" size="lg" className="group">
                Learn More About Me
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
