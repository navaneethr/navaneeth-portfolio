import { Icons } from "@/components/icons"

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Contact
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Interested in working together or have a question? Reach out to Navaneeth for collaborations, project inquiries, or just to connect about frontend and web development.
        </p>
        <div className="mt-4 space-y-2">
          <div className="text-lg flex items-center gap-2 font-bold">
            <Icons.phone className="h-5 w-5 text-primary font-bold" />
            <a href="tel:+19253015495" className="text-primary hover:underline font-bold">+1 925-301-5495</a>
          </div>
          <div className="text-lg flex items-center gap-2 font-bold">
            <Icons.mail className="h-5 w-5 text-primary font-bold" />
            <a href="mailto:rnavaneethkishore@gmail.com" className="text-primary hover:underline font-bold">rnavaneethkishore@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}