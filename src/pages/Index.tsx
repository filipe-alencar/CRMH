import { useState, useEffect } from "react";
import { MessageCircle, Instagram, Mail, Globe, Sun, Moon } from "lucide-react";

const socialLinks = [
{ icon: MessageCircle, href: "#", label: "WhatsApp" },
{ icon: Instagram, href: "#", label: "Instagram" },
{ icon: Mail, href: "#", label: "Email" },
{ icon: Globe, href: "#", label: "Website" }];


const Index = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Theme toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-6 right-6 z-10 rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Toggle theme">

        {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 text-center">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-8xl">
            MARIA SILVA
          </h1>
          <p className="text-base tracking-[0.35em] text-muted-foreground uppercase sm:text-2xl">
            Produção Audiovisual
          </p>
          <p className="text-muted-foreground/70 text-xl">
            Coord./1ª Assist. de Produção - Assist. de Direção
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) =>
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/30">

              <Icon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>);

};

export default Index;