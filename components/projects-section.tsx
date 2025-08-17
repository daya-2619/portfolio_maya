"use client"

import { ExternalLink, Github, Play } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Personal Desktop Assistant",
      description: "Advanced personal assistant application leveraging AI for task automation and productivity enhancement.",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python"],
      githubUrl: "https://github.com/Payel-19/personal-desktop-assistance",
      liveUrl: "#",
      category: "All"
    },
    {
      title: "personal-recommendation-model",
      description: "Personalized recommendation system for personal-tutor platform.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Scikit-learn", "Pandas", "Plotly", "Streamlit", "PostgreSQL"],
      githubUrl: "https://github.com/Payel-19/personal_AI_based_Tutor",
      liveUrl: "#",
      category: "Machine Learning"
    },
    {
      title: "Emotion Detection",
      description: "Real-time emotion detection system using facial recognition and deep learning.",
      image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["TensorFlow", "Keras", "Python", "NumPy", "Matplotlib", "Jupyter"],
      githubUrl: "https://daya-2619-emotion-detection-app-sokkqg.streamlit.app",
      liveUrl: "https://daya-2619-emotion-detection-app-sokkqg.streamlit.app",
      category: "Deep Learning"
    },

  ]

  const categories = ["All", "Computer Vision", "NLP", "Data Science", "Deep Learning", "Machine Learning", "Time Series"]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my AI/ML projects demonstrating expertise across various domains 
            including computer vision, natural language processing, and predictive analytics.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="hover:scale-105 transition-transform"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 group/btn">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 group/btn">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These projects represent just a fraction of my experience in AI/ML development. 
            I'm always working on new and exciting projects that push the boundaries of what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </Button>
            <Button size="lg" variant="outline">
              <Play className="mr-2 h-4 w-4" />
              Watch Project Demos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}