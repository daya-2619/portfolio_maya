"use client"

import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      description: "Core AI/ML technologies and frameworks",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "Keras", level: 85 }
      ]
    },
    {
      title: "Data Science & Analytics",
      description: "Data processing and analysis tools",
      skills: [
        { name: "Pandas", level: 93 },
        { name: "NumPy", level: 95 },
        { name: "Matplotlib", level: 88 },
        { name: "Seaborn", level: 85 },
        { name: "Jupyter", level: 90 }
      ]
    },
    {
      title: "Web Development",
      description: "Full-stack development technologies",
      skills: [
        { name: "React", level: 87 },
        { name: "Next.js", level: 85 },
        { name: "Node.js", level: 82 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud platforms and deployment tools",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Git", level: 92 },
        { name: "MLflow", level: 78 },
        { name: "Kubernetes", level: 75 }
      ]
    }
  ]

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "React", "Next.js", "Node.js", "TypeScript",
    "Pandas", "NumPy", "Scikit-learn", "OpenCV", "NLTK", "Hugging Face", "AWS",
    "Docker", "Git", "MongoDB", "PostgreSQL", "Redis", "FastAPI", "Flask",
    "Jupyter", "MLflow", "Kubernetes", "Apache Spark", "Elasticsearch"
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent solutions from data preprocessing 
            to deployment in production environments.
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}