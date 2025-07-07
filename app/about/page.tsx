import { Timeline } from "@/components/ui/timeline"

const timelineItems = [
  {
    id: "zscaler",
    date: "2022 - Present",
    title: "Senior Software Engineer",
    description:
      "Worked on the CDP for ZPA, allowing customers to configure Policies, Permissions, Roles and see dashboards. Was part of migration efforts from Backbone to React JS with TypeScript. Also developed features like VPN for Legacy Apps, App Segmentation, Chrome Posture Profiles, QBR Insights which are currently used by customers",
    location: "Zscaler",
    companyUrl: "https://www.zscaler.com",
  },
  {
    id: "data-ai",
    date: "2021 - 2022",
    title: "Senior Software Engineer",
    description:
      "Focused on TDD, developing multiple features like Competitor Benchmarking and ConnectPlus. Mainly focused on Frontend with TypeScript and maintained 100% test coverage with Jest & RTL. Worked with Highcharts and in-house query language called AQL",
    location: "Data AI (Acquired by SensorTower)",
    companyUrl: "https://www.sensortower.com",
  },
  {
    id: "sciata",
    date: "2018 - 2021",
    title: "Software Engineer II",
    description:
      "Supported Amex's Pay with Bank Transfer, solely owned Bank and Merchant Onboarding CDP, optimized builds for the PWB Application reducing load times by 200% and reducing bundle sizes by 300%",
    location: "Sciata (Consulting)",
    companyUrl: "https://www.sciata.com",
  },
  {
    id: "cirtual",
    date: "2017 - 2018",
    title: "Software Engineer",
    description:
      "Focused on Front End development and built out 2 Web Applications: MySquad and DocPace. Used React Class Based, jQuery, and Highcharts",
    location: "Cirtual (Startup) - www.cirtual.com",
    companyUrl: "https://www.cirtual.com",
  },
  {
    id: "masters",
    date: "2014 - 2016",
    title: "Master's Degree",
    description:
      "Advanced my technical skills and knowledge in computer science, specializing in modern web technologies",
    location: "University of Houston, Clear Lake",
    companyUrl: "https://www.uhcl.edu",
  },
  {
    id: "undergrad",
    date: "2010 - 2014",
    title: "Bachelor of Engineering",
    description:
      "Pursued my undergraduate degree in Engineering, where I first fell in love with programming and software development",
    location: "Gokaraju Rangaraju Institute of Engineering & Technology",
    companyUrl: "https://www.griet.ac.in",
  },
  {
    id: "school-kendriya",
    date: "2003 - 2010",
    title: "Secondary & Higher Secondary School",
    description:
      "Developed a strong academic foundation and discovered my passion for technology",
    location: "Kendriya Vidyalaya Hyderabad, Narayana ECIL",
  },
  {
    id: "school-stgeorges",
    date: "1998 - 2003",
    title: "Primary School",
    description: "Completed my foundational education",
    location: "St Georges, Abids, Hyderabad",
  },
  {
    id: "birth",
    date: "Oct 2, 1992",
    title: "Born",
    description: "Started my journey in this world",
  },
]

export default function AboutPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex w-full justify-center">
        <div className="max-w-4xl text-center mb-12">
          <p className="text-base text-muted-foreground leading-relaxed">
            I&apos;m passionate about solving complex frontend problems with a strong
            focus on <span className="font-semibold">Performance</span>,{" "}
            <span className="font-semibold">Scalability</span>,{" "}
            <span className="font-semibold">Future-proofing</span>, and{" "}
            <span className="font-semibold">Maintainability</span>. My
            development approach is grounded in{" "}
            <span className="font-semibold">Test-Driven Development (TDD)</span>{" "}
            and comprehensive{" "}
            <span className="font-semibold">End-to-End testing</span> to ensure
            robust, reliable applications. I&apos;m particularly excited about the
            potential of <span className="font-semibold">GenAI products</span>{" "}
            and how they can transform user experiences in the frontend space.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Timeline items={timelineItems} className="w-full" />
      </div>
    </section>
  )
}
