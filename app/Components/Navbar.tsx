import { Award, FolderGit2, Home, Mail, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Certificates", href: "#certificates", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="fixed left-1/2 top-4 z-[999] hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-11 items-center gap-1 rounded-full border border-orange-500/25 bg-black/45 px-2 text-white shadow-lg shadow-black/30 backdrop-blur-md">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className="group flex h-8 items-center gap-2 rounded-full px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400"
              >
                <Icon
                  size={14}
                  strokeWidth={1.8}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>

      <details className="group/nav fixed right-4 top-4 z-[999] md:hidden">
        <summary
          aria-label="Open navigation menu"
          className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-orange-500/35 bg-black/70 text-orange-400 shadow-lg shadow-black/30 transition-all duration-300 hover:bg-orange-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-400 [&::-webkit-details-marker]:hidden"
        >
          <Menu size={20} className="group-open/nav:hidden" />
          <X size={20} className="hidden group-open/nav:block" />
        </summary>

        <div
          className="absolute right-0 top-14 w-48 overflow-hidden rounded-2xl border border-orange-500/25 bg-black/90 p-2 shadow-xl shadow-black/40"
        >
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className="flex h-11 items-center gap-3 rounded-xl px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-300 transition-all duration-300 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <Icon size={15} strokeWidth={1.8} className="text-orange-400" />
                {item.label}
              </a>
            );
          })}
        </div>
      </details>
    </>
  );
}
