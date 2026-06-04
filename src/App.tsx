import { Github, Linkedin, Pin, ExternalLink, FileText, Sparkles, Gamepad2 } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@KKA",
    href: "https://github.com/KKA-0",
    color: "hover:border-slate-400",
    iconColor: "text-slate-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Karan Agarwal",
    href: "https://www.linkedin.com/in/karanagarwal0/",
    color: "hover:border-sky-400",
    iconColor: "text-sky-400",
  },
  {
    icon: Pin,
    label: "Pinterest",
    handle: "kka0_0",
    href: "https://www.pinterest.com/kka0_0/",
    color: "hover:border-red-400",
    iconColor: "text-red-500",
  },
];

const projects = [
  {
    name: "playUs",
    tagline: "Co-op Gaming Hub",
    description:
      "Discover co-op games, create P2P connections, and play together. Galaxy Saver, Spaceship Shooter, Grow Snake, Chained Together, and many more.",
    href: "#",
    badge: "In Development",
    gradient: "from-amber-500/20 to-orange-500/10",
    borderColor: "hover:border-amber-400/60",
    badgeColor: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    icon: Gamepad2,
    iconColor: "text-amber-400",
  },
  {
    name: "SureBill",
    tagline: "Invoice Buddy",
    description:
      "A smart invoicing tool that simplifies billing workflows. Create, send, and track invoices with ease.",
    href: "#",
    badge: "Indie Project",
    gradient: "from-teal-500/20 to-cyan-500/10",
    borderColor: "hover:border-teal-400/60",
    badgeColor: "bg-teal-500/20 text-teal-300 border border-teal-500/30",
    icon: FileText,
    iconColor: "text-teal-400",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center px-4 py-16 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/5 blur-[100px]" />
        <div className="absolute top-1/2 right-[-5%] w-[300px] h-[300px] rounded-full bg-slate-500/5 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-10">
        {/* Avatar + Identity */}
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/40 to-sky-500/30 blur-xl scale-110" />
            <div className="relative w-28 h-28 rounded-full border-2 border-white/10 overflow-hidden bg-[#12121a] shadow-2xl">
              <img
                src="/Gemini_Generated_Image_xc3x11xc3x11xc3x-removebg-preview.png"
                alt="KKA avatar"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-teal-400 border-2 border-[#0a0a0f] shadow" />
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <h1 className="text-3xl font-bold tracking-tight text-white">KKA</h1>
              <Sparkles size={16} className="text-teal-400" />
            </div>
            <p className="text-sm text-slate-400">
              Doing what I love
            </p>
          </div>
        </div>

        {/* Social Links */}
        <section className="w-full flex flex-col gap-2 items-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
            Connect
          </p>
          <div className="flex gap-2">
            {socialLinks.map(({ icon: Icon, label, href, iconColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08] hover:shadow-lg hover:-translate-y-1 ${iconColor}`}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-xs text-slate-600 uppercase tracking-widest">Projects</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>

        {/* Projects */}
        <section className="w-full flex flex-col gap-4">
          {projects.map(
            ({
              name,
              tagline,
              description,
              href,
              badge,
              gradient,
              borderColor,
              badgeColor,
              icon: Icon,
              iconColor,
            }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-full rounded-2xl border border-white/[0.08] bg-gradient-to-br ${gradient} backdrop-blur-sm overflow-hidden transition-all duration-300 ${borderColor} hover:shadow-xl hover:-translate-y-0.5`}
              >
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-white/5 ${iconColor}`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">{name}</h3>
                        <p className="text-xs text-slate-400">{tagline}</p>
                      </div>
                    </div>
                    <ExternalLink
                      size={14}
                      className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                  <div className="mt-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColor}`}>
                      {badge}
                    </span>
                  </div>
                </div>
              </a>
            )
          )}
        </section>

        {/* Footer */}
        <footer className="text-center mt-4">
          <p className="text-xs text-slate-700">Built with care by KKA</p>
        </footer>
      </div>
    </div>
  );
}
