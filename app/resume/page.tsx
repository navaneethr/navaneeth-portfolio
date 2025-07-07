import { Download, ExternalLink, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Timeline } from "@/components/ui/timeline"

export default function ResumePage() {
  const experiences = [
    {
      id: "exp1",
      title: "Senior Software Engineer",
      date: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Improved application performance by 40%, led a team of 5 developers, and implemented CI/CD pipelines.",
      location: "Tech Company",
    },
    {
      id: "exp2",
      title: "Software Engineer",
      date: "2020 - 2022",
      description:
        "Developed full-stack applications and contributed to product architecture decisions. Built responsive web applications, integrated third-party APIs, and optimized database queries.",
      location: "Startup Inc",
    },
    {
      id: "exp3",
      title: "Junior Developer",
      date: "2019 - 2020",
      description:
        "Created custom websites and web applications for various clients. Delivered 15+ client projects, learned modern web technologies, and collaborated with design teams.",
      location: "Web Agency",
    },
  ]

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University Name",
      period: "2015 - 2019",
      description:
        "Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems",
    },
  ]

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-xl text-muted-foreground mb-6">
          My professional experience and qualifications
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank">
              <ExternalLink className="mr-2 h-4 w-4" />
              View PDF
            </a>
          </Button>
        </div>
      </div>

      <div className="space-y-8">
        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <Timeline items={experiences} />
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{edu.degree}</span>
                  <Badge variant="secondary">{edu.period}</Badge>
                </CardTitle>
                <CardDescription className="text-lg font-medium">
                  {edu.school}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  )
}
