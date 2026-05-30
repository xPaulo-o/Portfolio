import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

export default function CyberHero() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/xPaulo-o",
      icon: FaGithub,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/xpaulo_o2/",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/paulo-augusto-b579513a1",
      icon: FaLinkedinIn,
    },
  ];

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white md:h-screen">
      <div className="relative flex h-full items-center justify-center p-3 md:p-6">
        <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/10 bg-black/70 md:rounded-[32px] md:backdrop-blur-sm">
          {/* SOCIAL BUTTONS */}
          <div className="absolute left-4 top-4 z-50 flex items-center gap-2 md:left-auto md:right-6 md:top-6 md:gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-orange-500/35 bg-black/55 text-orange-400 transition-all duration-300 hover:scale-110 hover:border-orange-500/80 hover:bg-orange-500/10 md:h-11 md:w-11 md:bg-black/40 md:backdrop-blur-md"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </div>

          {/* HEXAGON SVG */}
          <svg
            className="pointer-events-none absolute left-1/2 top-[47%] z-[8] h-[58svh] w-[58svh] min-h-[340px] min-w-[340px] -translate-x-1/2 -translate-y-1/2 opacity-70 md:top-[48%] md:z-20 md:h-[95vh] md:w-[95vh] md:min-h-[750px] md:min-w-[750px] md:opacity-100"
            viewBox="0 0 700 700"
            fill="none"
          >
            <polygon
              points="350,40 610,175 610,525 350,660 90,525 90,175"
              stroke="rgba(249,115,22,0.18)"
              strokeWidth="1.5"
            />
            <polygon
              points="350,85 565,200 565,500 350,615 135,500 135,200"
              stroke="rgba(249,115,22,0.5)"
              strokeWidth="1.5"
            />
          </svg>

          {/* LEFT TEXT */}
          <div className="absolute left-6 top-[28%] z-30 md:left-[5%] md:top-1/2 md:-translate-y-1/2">
            <h1 className="text-[clamp(2.3rem,11vw,3.5rem)] font-black uppercase leading-none tracking-[0.16em] md:text-[clamp(2.5rem,6vw,6rem)] md:tracking-[0.25em]">
              <span className="animate-smooth-jump">HELLO</span>
            </h1>

            <div className="mt-5 flex items-start gap-3 md:mt-6 md:gap-5">
              <div className="h-[94px] w-px bg-orange-500 md:h-[120px]" />

              <p className="max-w-[170px] text-[0.68rem] leading-6 text-zinc-300 md:max-w-[260px] md:text-[clamp(0.7rem,1vw,1rem)] md:leading-8 md:text-zinc-400">
                I’m{" "}
                <span className="text-orange-400">Paulo Augusto</span>,
                <br />
                a Game developer,
                <br />
                web developer and
                <br />
                Enthusiast of technology.
              </p>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="absolute right-5 top-[38%] z-30 md:right-[0%] md:top-1/2 md:-translate-y-1/2">
            <h1 className="text-[clamp(2rem,9.5vw,3.2rem)] font-black uppercase leading-none tracking-[0.16em] md:text-[clamp(2.5rem,6vw,6rem)] md:tracking-[0.25em]">
              <span
                className="animate-smooth-jump"
                style={{ animationDelay: "0.2s" }}
              >
                WORLD!
              </span>
            </h1>
          </div>

          {/* CENTER IMAGE */}
          <div className="absolute bottom-[52px] left-[58%] z-10 flex h-[53svh] w-[74vw] max-w-[290px] -translate-x-1/2 items-end justify-center overflow-hidden md:bottom-[-30px] md:left-[46%] md:h-[96vh] md:w-[600px] md:max-w-none">
            <Image
              src="/images/foto1.avif"
              alt="Character"
              fill
              sizes="(min-width: 768px) 600px, 74vw"
              preload
              unoptimized
              className="h-full w-full object-contain object-bottom [mask-image:linear-gradient(to_bottom,black_50%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_98%)]"
            />
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="absolute bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[360px] -translate-x-1/2 md:bottom-[3%] md:left-[51%] md:w-auto md:max-w-none">
            <a
              href="/Curriculum/Curriculum.pdf"
              download="Paulo_Augusto_CV.pdf"
              className="group relative flex h-[58px] w-full items-center overflow-hidden rounded-full border border-orange-500/70 bg-black/60 transition-all duration-300 hover:scale-[1.02] md:h-[72px] md:w-[360px] md:bg-black/40 md:backdrop-blur-md"
            >
              <div className="flex flex-1 items-center justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-400 md:text-[13px] md:tracking-[0.45em]">
                  Download CV
                </span>
              </div>

              <div className="h-full w-px bg-orange-500/30" />

              <div className="flex h-full w-[68px] items-center justify-center md:w-[88px]">
                <BsDownload
                  size={22}
                  strokeWidth={1.8}
                  className="text-orange-400 transition-transform duration-300 group-hover:translate-y-1"
                />
              </div>
            </a>
          </div>

          {/* BOTTOM DOTS */}
          <div className="absolute bottom-6 left-6 hidden grid-cols-4 gap-3 md:grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-[2px] w-[2px] rounded-full bg-orange-500"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
