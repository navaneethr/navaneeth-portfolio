"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Content wrapper */}
      <div>
        {/* Hero Section */}
        <section className="container relative px-4 py-8 md:py-12 lg:py-16">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center"
            >
              {/* Hero Image */}
              <motion.div variants={fadeInUp} className="mb-8">
                <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />
                  <div className="relative overflow-hidden rounded-full border-4 border-primary/20 shadow-2xl">
                    <img
                      src="/nav.jpg"
                      alt="Navaneeth"
                      className="w-full h-full object-cover scale-110 transition-transform duration-500 hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/40 rounded-full animate-pulse delay-1000" />
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-primary/50 rounded-full animate-pulse delay-500" />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                  >
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Navaneeth
                    </span>
                  </motion.h1>
                  <motion.p
                    variants={fadeInUp}
                    className="text-xl text-muted-foreground md:text-2xl"
                  >
                    Frontend Expert & React Developer
                  </motion.p>
                  <motion.p
                    variants={fadeInUp}
                    className="mx-auto max-w-2xl text-lg text-muted-foreground"
                  >
                    Passionate about building high-performance, scalable web
                    applications with modern technologies. Experienced in
                    crafting seamless user experiences and robust solutions.
                  </motion.p>
                </div>
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Link
                    href="/contact"
                    className={buttonVariants({ size: "lg" })}
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/portfolio"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                    })}
                  >
                    View My Work
                  </Link>
                  <a
                    href="/resume.pdf"
                    className={buttonVariants({
                      variant: "outline",
                      size: "lg",
                    })}
                    download
                  >
                    <Icons.fileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                  <Link
                    href="https://firecracker-gpt.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "secondary",
                      size: "lg",
                    })}
                  >
                    <Icons.externalLink className="mr-2 h-4 w-4" />
                    <span>
                      Firecracker GPT by <b>Nav</b>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="container px-4 py-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-6xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-3 mb-8"
            >
              <h2 className="text-3xl font-bold md:text-4xl">Quick Access</h2>
              <p className="text-lg text-muted-foreground">
                Jump right into what interests you most
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <motion.div variants={fadeInUp}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col">
                  <CardHeader className="text-center flex-grow">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icons.user className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">About Me</CardTitle>
                    <CardDescription>
                      Learn about my journey, experience, and passion for
                      development
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Link
                      href="/about"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      Learn More
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col">
                  <CardHeader className="text-center flex-grow">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icons.code className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Portfolio</CardTitle>
                    <CardDescription>
                      Explore my latest projects and technical achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Link
                      href="/portfolio"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      View Projects
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col">
                  <CardHeader className="text-center flex-grow">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icons.post className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Blog</CardTitle>
                    <CardDescription>
                      Read my thoughts on development, tech trends, and
                      experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Link
                      href="/blog"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      Read Posts
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex flex-col">
                  <CardHeader className="text-center flex-grow">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icons.mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Contact</CardTitle>
                    <CardDescription>
                      Let&apos;s connect and discuss opportunities or
                      collaborations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Link
                      href="/contact"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      Get In Touch
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <section className="container px-4 py-8 bg-muted/20">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-6xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-3 mb-8"
            >
              <h2 className="text-3xl font-bold md:text-4xl">Tech Stack</h2>
              <p className="text-lg text-muted-foreground">
                Technologies I love working with
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {[
                {
                  name: "React",
                  level: 100,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "TypeScript",
                  level: 90,
                  color: "from-blue-600 to-blue-700",
                },
                {
                  name: "Next.js",
                  level: 80,
                  color: "from-green-500 to-green-600",
                },
                {
                  name: "JavaScript",
                  level: 100,
                  color: "from-yellow-400 to-yellow-500",
                },
                {
                  name: "Node.js",
                  level: 80,
                  color: "from-green-500 to-green-600",
                },
                {
                  name: "HTML/CSS",
                  level: 100,
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Tailwind CSS",
                  level: 80,
                  color: "from-teal-400 to-blue-500",
                },
                { name: "Git", level: 80, color: "from-orange-600 to-red-600" },
                {
                  name: "MongoDB",
                  level: 80,
                  color: "from-green-400 to-green-500",
                },
                {
                  name: "PostgreSQL",
                  level: 80,
                  color: "from-blue-700 to-indigo-700",
                },
                {
                  name: "Express.js",
                  level: 80,
                  color: "from-gray-600 to-gray-700",
                },
                {
                  name: "Python",
                  level: 70,
                  color: "from-blue-400 to-yellow-400",
                },
                {
                  name: "GraphQL",
                  level: 70,
                  color: "from-pink-500 to-purple-500",
                },
                {
                  name: "Redux",
                  level: 100,
                  color: "from-purple-600 to-purple-700",
                },
                {
                  name: "Framer Motion",
                  level: 80,
                  color: "from-pink-400 to-pink-500",
                },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-lg p-4 border"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-sm">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {tech.level}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Work */}
        <section className="container px-4 py-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-6xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center space-y-3 mb-8"
            >
              <h2 className="text-3xl font-bold md:text-4xl">Featured Work</h2>
              <p className="text-lg text-muted-foreground">
                Some of my favorite projects
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div variants={fadeInUp}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <div className="flex h-full items-center justify-center">
                      <Icons.code className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl">GitHub Projects</CardTitle>
                    <CardDescription>
                      Explore my open-source contributions and personal projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Link
                      href="/portfolio"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      View All Projects
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-green-500/20 to-blue-500/20">
                    <div className="flex h-full items-center justify-center">
                      <Icons.play className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl">CodeSandbox Demos</CardTitle>
                    <CardDescription>
                      Interactive demos and code experiments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Link
                      href="/portfolio"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      Try Demos
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="group h-full transition-all duration-300 hover:shadow-lg flex flex-col">
                  <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <div className="flex h-full items-center justify-center">
                      <Icons.post className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl">Latest Blog Posts</CardTitle>
                    <CardDescription>
                      Recent articles and technical insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Link
                      href="/blog"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "w-full",
                      })}
                    >
                      Read Articles
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto max-w-4xl text-center space-y-6"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need a frontend developer, have a project in mind, or
              just want to connect, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                <Icons.mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/navaneethr"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <Icons.gitHub className="mr-2 h-5 w-5" />
                GitHub Profile
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
