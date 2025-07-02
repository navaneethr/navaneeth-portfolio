export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Nav",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Media",
      href: "/media",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/navaneethr",
    docs: "https://ui.shadcn.com",
  },
}
