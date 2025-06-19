import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  Search,
  Filter,
  ChevronRight,
  Code,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import Layout from "@/components/Layout";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt:
        "Learn the best practices for creating robust, scalable web applications using modern React patterns and Node.js backend architecture.",
      content:
        "In this comprehensive guide, I'll walk you through the essential patterns and practices I've learned while building 15+ production applications...",
      author: "Ankit",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["React", "Node.js", "JavaScript", "Architecture"],
      featured: true,
    },
    {
      id: 2,
      title:
        "My Journey: From Teaching 500+ Students to Full-Stack Development",
      excerpt:
        "Reflections on how education shaped my approach to development and the valuable lessons learned from teaching CBSE students.",
      content:
        "Teaching has always been a passion of mine. When I started educating students in CBSE Science, Math, and Social Studies...",
      author: "Ankit",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      category: "Personal Journey",
      tags: ["Education", "Career", "Teaching", "Development"],
      featured: false,
    },
    {
      id: 3,
      title:
        "Machine Learning in Real-World Applications: Smart Parking System",
      excerpt:
        "Deep dive into building an IoT-powered smart parking system using machine learning algorithms for real-time optimization.",
      content:
        "Urban parking is a complex problem that affects millions of people daily. In this project, I developed a smart parking system...",
      author: "Ankit",
      publishDate: "2024-01-05",
      readTime: "12 min read",
      category: "Machine Learning",
      tags: ["ML", "IoT", "Python", "Smart Cities"],
      featured: true,
    },
    {
      id: 4,
      title: "Leadership Lessons from the Aspire Program",
      excerpt:
        "Key insights and leadership principles learned during my time in the Aspire Leadership Program and how they apply to tech teams.",
      content:
        "The Aspire Leadership Program was a transformative experience that changed how I approach team leadership and innovation...",
      author: "Ankit",
      publishDate: "2023-12-20",
      readTime: "7 min read",
      category: "Leadership",
      tags: ["Leadership", "Management", "Innovation", "Growth"],
      featured: false,
    },
    {
      id: 5,
      title: "Creating Interactive Learning Experiences with React",
      excerpt:
        "How I built an engaging Learning Management System that improved student outcomes through interactive features and real-time feedback.",
      content:
        "Education technology has the power to transform how we learn. When I set out to build a Learning Management System...",
      author: "Ankit",
      publishDate: "2023-12-15",
      readTime: "10 min read",
      category: "Education Tech",
      tags: ["React", "Education", "LMS", "Firebase"],
      featured: false,
    },
    {
      id: 6,
      title: "The Future of Embedded Systems in Smart Cities",
      excerpt:
        "Exploring how embedded systems and IoT devices are shaping the future of urban infrastructure and sustainable living.",
      content:
        "As cities grow and technology advances, the integration of embedded systems into urban infrastructure becomes crucial...",
      author: "Ankit",
      publishDate: "2023-12-10",
      readTime: "9 min read",
      category: "IoT & Embedded",
      tags: ["IoT", "Embedded", "Smart Cities", "Sustainability"],
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    {
      id: "Web Development",
      name: "Web Development",
      count: blogPosts.filter((p) => p.category === "Web Development").length,
    },
    {
      id: "Machine Learning",
      name: "Machine Learning",
      count: blogPosts.filter((p) => p.category === "Machine Learning").length,
    },
    {
      id: "Leadership",
      name: "Leadership",
      count: blogPosts.filter((p) => p.category === "Leadership").length,
    },
    {
      id: "Education Tech",
      name: "Education Tech",
      count: blogPosts.filter((p) => p.category === "Education Tech").length,
    },
    {
      id: "IoT & Embedded",
      name: "IoT & Embedded",
      count: blogPosts.filter((p) => p.category === "IoT & Embedded").length,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return Code;
      case "Machine Learning":
        return Zap;
      case "Leadership":
        return Users;
      case "Education Tech":
        return BookOpen;
      case "IoT & Embedded":
        return Lightbulb;
      default:
        return BookOpen;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Insights & Articles
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-purple-500 to-cyan-500">
              Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights from my journey as a developer, educator, and tech
            creator. Thoughts on web development, machine learning, leadership,
            and everything in between.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-6 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
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
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "all" && searchTerm === "" && (
        <section className="py-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => {
                const IconComponent = getCategoryIcon(post.category);
                return (
                  <Card
                    key={post.id}
                    className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/20"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <Badge className="text-xs bg-primary/10 text-primary">
                          Featured
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="outline" className="group">
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {selectedCategory === "all" && searchTerm === ""
              ? "All Articles"
              : "Search Results"}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                const IconComponent = getCategoryIcon(post.category);
                return (
                  <Card
                    key={post.id}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="text-xs bg-primary/10 text-primary">
                            Featured
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-xs text-muted-foreground mb-4">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="mr-3">
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group"
                      >
                        Read Article
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 to-brand-600/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development,
              machine learning, and tech leadership insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-1"
              />
              <Button className="group">
                Subscribe
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
