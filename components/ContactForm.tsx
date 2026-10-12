"use client";
import { useState, type FormEvent } from "react";
import { company } from "@/lib/data";

const field =
  "w-full rounded-2xl border border-border bg-foreground/5 px-4 py-3 outline-none transition focus:border-violet-400 focus:bg-foreground/10";

// No backend yet: submitting opens the visitor's email client with the message prefilled.
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Name: ${d.get("name")}\nEmail: ${d.get("email")}\nInterested in: ${d.get("topic")}\n\n${d.get("message")}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      "Website enquiry from " + d.get("name"),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={field} />
        <input name="email" type="email" required placeholder="Work email" className={field} />
      </div>
      <select name="topic" className={field} defaultValue="Web Application Development">
        {["Web Application Development", "Mobile App Development", "Quality Engineering", "Dev Ops", "Analytics", "BigData, ML & AI", "Other"].map(
          (o) => <option key={o} className="bg-neutral-900">{o}</option>,
        )}
      </select>
      <textarea name="message" required rows={5} placeholder="How can we help?" className={field} />
      <button className="rounded-full bg-foreground px-8 py-3 font-semibold text-background transition hover:scale-105">
        Send message
      </button>
      {sent && <p className="text-sm text-emerald-500">Opening your email app to send this to {company.email}.</p>}
    </form>
  );
}
