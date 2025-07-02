import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Navaneeth is a Frontend Expert<br className="hidden sm:inline" />
          specializing in React and TypeScript development.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Passionate about building high-performance, scalable web applications with modern technologies. Experienced in crafting seamless user experiences and robust backend solutions. Always eager to learn, collaborate, and deliver impactful products.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/contact"
          className={buttonVariants()}
        >
          Contact
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/navaneethr"
          className={buttonVariants({ variant: "outline" })}
        >
          <Icons.gitHub className="mr-2 h-4 w-4" />
          GitHub
        </Link>
      </div>
    </section>
  )
}
