"use client"
import { Icons } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { toast } from "@/hooks/use-toast"
import axios from "axios"

export default function ContactPage() {
  // Formspree details
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblybogv"; // <-- Replace with your Formspree endpoint

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateEmail(email: string) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Validation
    if (!form.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return;
    }
    if (!form.email.trim()) {
      toast({
        title: "Email is required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    if (!validateEmail(form.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    if (!form.message.trim()) {
      toast({
        title: "Message is required",
        description: "Please enter your message.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const data = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    try {
      const response = await axios.post(FORMSPREE_ENDPOINT, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. Navaneeth will get back to you soon."
        });
      } else {
        toast({
          title: "Submission failed",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* Header and contact info in a row */}
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row w-full items-end justify-between gap-8 md:gap-24">
          <div className="flex-1 min-w-[200px] text-left flex flex-col justify-end h-full">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Contact
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground mt-2">
              Interested in working together or have a question? Reach out to Navaneeth for collaborations, project inquiries, or just to connect about frontend and web development.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 min-w-[200px] mt-4 md:mt-0 justify-end h-full">
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
        {/* Form below, centered */}
        <div className="flex justify-center items-center w-full">
          <form ref={formRef} className="w-full max-w-md space-y-4 bg-background/80 rounded-xl shadow-lg p-6 flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} className="mt-1" />
            </div>
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} className="mt-1" />
            </div>
            <div className="w-full">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={form.message} onChange={handleChange} className="mt-1" rows={5} />
            </div>
            <Button type="submit" disabled={loading} className="mx-auto w-full md:w-auto">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}