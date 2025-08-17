"use client"

import { Brain, Code, Database, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export function AboutSection() {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep understanding of machine learning algorithms, neural networks, and AI frameworks"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in building end-to-end AI solutions with modern web technologies"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Experience in data preprocessing, feature engineering, and big data technologies"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about solving complex problems with creative AI-driven solutions"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate AI/ML Engineer with a strong background in developing intelligent systems 
            that solve real-world problems. My journey in artificial intelligence has led me to work 
            on diverse projects ranging from computer vision to natural language processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With a strong foundation in computer science and mathematics, I've dedicated my career 
                to exploring the frontiers of artificial intelligence and machine learning. My expertise 
                spans across various domains including deep learning, computer vision, and natural language processing.
              </p>
              <p>
                I believe in the power of AI to transform industries and improve lives. Through my work, 
                I strive to create solutions that are not only technically sound but also ethically responsible 
                and accessible to everyone.
              </p>
              <p>
                When I'm not coding or training models, you can find me contributing to open-source projects, 
                writing technical blogs, or exploring the latest research papers in AI/ML.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Education</h4>
              <p className="text-muted-foreground">
                Bachelor's in Computer Science with specialization in Artificial Intelligence
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Experience</h4>
              <p className="text-muted-foreground">
                AI/ML development with focus on production-ready solutions
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Interests</h4>
              <p className="text-muted-foreground">
                Computer Vision, NLP, Reinforcement Learning, MLOps, and Ethical AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}