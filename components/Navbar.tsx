"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" aria-label="Prasthana home" className="flex items-center">
            <Image src="/logo-blue-bright.png" alt="Prasthana" width={140} height={40} priority className="h-9 w-auto" />
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => {
              const active = pathname.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                      active ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:scale-105 sm:block"
            >
              Let&apos;s talk
            </Link>
            <button
              aria-label="Toggle menu"
              className="rounded-full p-2 lg:hidden"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pb-4 lg:hidden"
            >
              {[...nav, { href: "/contact", label: "Contact" }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-lg text-muted hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-400"
        />
      </div>
    </header>
  );
}
