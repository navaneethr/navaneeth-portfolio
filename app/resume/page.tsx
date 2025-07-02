import { Button } from "@/components/ui/button"
export default function ResumePage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Resume
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Download or view Navaneeth&apos;s professional resume, including experience, skills, and education.
        </p>
        <Button asChild className="mt-4">
          <a href="/resume.pdf" download>
            Download Resume (PDF)
          </a>
        </Button>
      </div>
    </section>
  )
}
