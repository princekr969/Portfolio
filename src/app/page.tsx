"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { FaCircle, FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { IoIosPaper } from "react-icons/io";
import Image from "next/image";
import Resume from "../../public/resume.png";
import ShinyButton from "@/components/ui/shiny-button";
import { ExternalLink } from "lucide-react";
import LiquidChrome from "@/components/liquid-chrome";

const BLUR_FADE_DELAY = 0.06;

export default function Page() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.href && e.currentTarget.href.startsWith('#')) {
      e.preventDefault();
      const targetId = e.currentTarget.href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-8">
      <section id="hero">
        <div className="mx-auto w-full max-w-5xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-start  gap-8 py-4 relative">
            {/* Profile Image - Comes first on mobile, right on desktop */}
            <div className="order-first md:order-last">
              <BlurFade delay={BLUR_FADE_DELAY}>

              <Image
                src={DATA.avatarUrl}
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full bg-blue-300 dark:bg-yellow-300"
              />
              </BlurFade>
            </div>

            {/* Content */}
            <div className="flex-col flex flex-1 space-y-1.5 relative z-10 order-last md:order-first">
              <div className="mb-4 md:mb-6">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none md:text-left"
                  yOffset={8}
                  text={`${DATA.name.split(" ")[0]} ${DATA.name.split(" ")[1]}`}
                />
                <BlurFadeText
                  className="max-w-[600px] text-[18px] md:text-2xl text-slate-50 md:text-left"
                  delay={BLUR_FADE_DELAY}
                  text="Full-Stack Software Developer"
                />
                <BlurFadeText
                  className="max-w-[600px] text-[12px] md:text-lg text-slate-400"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4  md:justify-start">
                <div className="flex flex-row items-center gap-3 md:gap-6">
                  <BlurFade delay={BLUR_FADE_DELAY}>
                    <HoverBorderGradient className="flex flex-row items-center gap-3 py-1.5 text-[16px] md:text-[20px]">
                      <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
                      <Link href="#contact" onClick={handleSmoothScroll}>Get in Touch</Link>
                    </HoverBorderGradient>
                  </BlurFade>
                </div>
                <div className="flex flex-row items-center gap-3 md:gap-6">
                  <BlurFade delay={BLUR_FADE_DELAY}>
                    <HoverBorderGradient className="flex flex-row  items-center gap-3 py-1.5 text-[16px] md:text-[20px]">
                      <IoIosPaper className="size-5 fill-white text-gray-900" />
                      <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume/ CV
                      </a>
                    </HoverBorderGradient>
                  </BlurFade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl md:text-2xl font-bold">Work Experience</h2>
          </BlurFade>
          <div className="flex flex-col gap-4">

            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  bulletPoints={work.description}
                  technologies={work.technologies}
                />

              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl md:text-2xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.details}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
               
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Skills
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Technologies I work with to build scalable, modern applications.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.text} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="px-2 rounded-md text-primary-foreground hover:cursor-pointer flex items-center justify-center border bg-background  hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
                  <img src={`/skills/${skill.icons}`} alt={skill.text} className="w-6 h-6 inline-block" />
                  <Badge className="bg-transparent hover:bg-transparent text-white text-lg" key={skill.text}>{skill.text}</Badge>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in connecting? Send me an email or add me on LinkedIn—I'll get back to you as soon as possible.
              </p>
            </div>
          <div className="flex items-center justify-center gap-4 text-[16px] font-semibold">
            Hire Me 👉
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-xl text-blue-600 hover:text-blue-600"
              title="Reach out to me via Outlook"
              target="_blank"
            >
              <FaEnvelope className="text-4xl" />
            </a>
            <a
              href={DATA.contact.social.LinkedIn.url}
              className="text-xl text-blue-600 hover:text-blue-600"
              target="_blank"
              title="Reach out to me via LinkedIn"
            >
              <FaLinkedin className="text-4xl" />
            </a>
          </div>
          <div className="flex items-center justify-center text-[16px] mt-4 gap-2">
          <span className="text-white">Email me at</span>
          <a
            href={`mailto:${DATA.contact.email}`}
            className="text-green-500 hover:underline font-medium"
          >
            {DATA.contact.email}
          </a>
        </div>  
          </BlurFade>
        </div>
      </section>
      
    </main>
  );
}
