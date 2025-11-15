"use client";
import { useState } from "react";
import { t, getRoles } from "./i18n";

// Icon components (inline SVG)
const EducationIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 mb-1 text-blue-500 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 14L2 9l10-5 10 5-10 5zm0 0v6m-7-7v2a7 7 0 0014 0v-2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExperienceIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 text-green-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 018 0v2M5 10V7a4 4 0 014-4h6a4 4 0 014 4v3" />
    <circle cx="12" cy="14" r="4" stroke="currentColor" strokeWidth={2} fill="none"/>
  </svg>
);

const SkillsIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 text-yellow-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a4 4 0 002 0m-2 0a4 4 0 01-2-3.464V7a4 4 0 014-4 4 4 0 014 4v6.536A4 4 0 0113 17m-2 0v1a2 2 0 104 0v-1" />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 mb-1 text-purple-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect width="20" height="14" x="2" y="5" rx="2" stroke="currentColor" strokeWidth={2} fill="none"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
  </svg>
);

const AchievementsIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 text-yellow-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M8 21l4-2 4 2V5a4 4 0 10-8 0v16z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" fill="none" />
  </svg>
);

const LanguageIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 mb-1 text-indigo-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth={2} strokeLinecap="round"/>
  </svg>
);

const CurrentIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 mb-1 text-cyan-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactIcon = () => (
  <svg className="inline-block w-6 h-6 mr-2 mb-1 text-rose-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg className="inline-block w-5 h-5 mr-2 text-rose-400 align-text-bottom" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0l-9 6-9-6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="inline-block w-5 h-5 mr-2 text-blue-500 align-text-bottom" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="inline-block w-5 h-5 mr-2 text-zinc-300 align-text-bottom" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.017-2.252-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.019.005 2.047.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/>
  </svg>
);

const projects = [
  {
    name: "War of Pirates",
    url: "https://www.youtube.com/watch?v=QepiLEVl7XY&t",
    image: "/warofpirates.jpg",
    tech: ["Unity", "C#", "Mirror Networking", "Online Game Security"],
    desc: {
      tr: "Çok oyunculu korsan temalı bir savaş oyunu. Gelişmiş anti-cheat ve online altyapı.",
      en: "Multiplayer pirate-themed battle game. Advanced anti-cheat and online infrastructure.",
    },
    youtube: {
      url: "https://www.youtube.com/watch?v=QepiLEVl7XY&t",
      label: {
        tr: "Topluluk videosu (YouTube)",
        en: "Community video (YouTube)",
      },
    },
  },
  {
    name: "Bir Siparişim Var",
    url: "#",
    image: "/birsiparisimvar.webp",
    tech: ["Vue.js", ".NET", "Web API", "WebSocket", "Multi-Tenant", "JWT", "PostgreSQL", "Chart JS"],
    desc: {
      tr: "Restoranlar ve müşteriler için sipariş yönetim platformu. Modern arayüz, hızlı ve güvenli altyapı.",
      en: "Order management platform for restaurants and customers. Modern UI, fast and secure infrastructure.",
    },
  },
  {
    name: "KOSKİ Coğrafi Bilgi Sistemi Projesi",
    url: "#",
    image: "/koski.png",
    tech: ["Java", "GeoServer", "Leaflet", "PostgreSQL"],
    desc: {
      tr: "Java, GeoServer ve Leaflet kullanılarak coğrafi katmanlar üzerinde mekansal veri görselleştirme ve analiz işlemleri gerçekleştirildi.",
      en: "A web-based geographic information system was developed during a summer internship, utilizing Java, GeoServer, and Leaflet.",
    },
  },
  {
    name: "Microservice App",
    url: "https://github.com/Lessyzz/Microservice-App",
    image: "/cybersoft.png",
    tech: [
      "React",
      "Java Quarkus",
      "TypeScript",
      "Java",
      "Python",
      "C#",
      "Docker",
      "Kafka",
      "CSS",
      "Microservices",
    ],
    desc: {
      tr: "Modern, ölçeklenebilir web siteleri React ile dinamik ve etkileşimli arayüzler, Java Quarkus ile Rest API ve mikroservis mimarisi kullanılarak geliştirildi. Docker ve Kafka ile dağıtık sistem altyapısı kuruldu.",
      en: "Designed modern, scalable websites using React for dynamic and interactive user interfaces and Java Quarkus for Rest API. Built with microservice architecture, Docker, and Kafka for distributed systems.",
    },
  },
];

const achievements = [
  { tr: "Siber Vatan Bootcamp CTF | Konya 1.si, Türkiye 8.si", en: "Siber Vatan Bootcamp CTF | 1st in Konya, 8th in Türkiye" },
  { tr: "Bursa Teknik Üniversite BTUCTF | 1.si", en: "Bursa Teknik University BTUCTF | Rank 1" },
];

const current = {
  tr: "Şu anda web geliştirme, sanallaştırma teknolojileri, oyun geliştirme ve siber güvenlik alanlarında aktif olarak çalışıyorum.",
  en: "Currently working actively in web development, virtualization technologies, game development, and cyber security.",
};

const language = {
  tr: "Türkçe Anadil | İngilizce B2",
  en: "Turkish Native | English B2",
};

const webTechnologies = {
  backend: [
    "Java | Quarkus & Spring",
    "Asp.NET Core | Rest & MVC & Entity Framework",
    "Next JS",
    "Nuxt JS",
    "Nest JS",
    "Go | Fiber",
    "Python | Flask",
    "Php",
    "PostgreSQL",
    "ORM",
  ],
  frontend: [
    "JavaScript & TypeScript",
    "React",
    "Vue",
    "Tailwind",
    "Bootstrap",
  ],
};

const cyberSecurity = {
  tools: [
    "Burpsuite",
    "Nmap",
    "Metasploit Framework",
    "IDA",
    "x64debugger",
  ],
  fields: [
    "Web Security",
    "Application Security",
    "API Security",
    "Malware Analysis",
  ],
};

const gameDevelopment = {
  tools: [
    "Unity 6 | 2D & 3D",
    "Cross Platform | PC & Android & IOS",
    "Full Stack Development",
    "Online Game Development | Mirror Networking",
    "Advanced Anti Cheat Systems",
    "Online Game Security",
  ],
};

const otherSkills = [
  "Github",
  "Docker | Compose & Container & Kafka",
  "Nginx",
  "Devops Operations",
];

const education = [
  {
    tr: "Konya Teknik Üniversitesi | Bilgisayar Programcılığı (Mezun)",
    en: "Konya Technical University | Computer Programming (Graduate)",
  },
  {
    tr: "Necmettin Erbakan Üniversitesi | Yönetim Bilişim Sistemleri (Öğrenci)",
    en: "Necmettin Erbakan University | Management Information Systems (Student)",
  },
];

const contacts = [
  {
    label: "onurtazefidan12345@gmail.com",
    url: "mailto:onurtazefidan12345@gmail.com",
    icon: <MailIcon />,
  },
  {
    label: "onur.tazefidan@softsprout.com.tr",
    url: "mailto:onur.tazefidan@softsprout.com.tr",
    icon: <MailIcon />,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/onurtazefidan/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    url: "https://github.com/Lessyzz",
    icon: <GitHubIcon />,
  },
];

export default function Home() {
  const [locale, setLocale] = useState<"tr" | "en">("tr");
  const roles = getRoles(locale);

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-mono px-2 md:px-8 py-8 transition-colors duration-300">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-16">
        {/* Language Switcher */}
        <div className="flex justify-end mb-4">
          <div className="flex gap-3">
            <button
              className={`px-4 py-1 rounded-full border transition font-semibold ${
                locale === "tr"
                  ? "bg-zinc-100 text-black border-zinc-100 shadow"
                  : "bg-zinc-900 text-zinc-100 border-zinc-700 hover:bg-zinc-800"
              }`}
              onClick={() => setLocale("tr")}
            >
              Türkçe
            </button>
            <button
              className={`px-4 py-1 rounded-full border transition font-semibold ${
                locale === "en"
                  ? "bg-zinc-100 text-black border-zinc-100 shadow"
                  : "bg-zinc-900 text-zinc-100 border-zinc-700 hover:bg-zinc-800"
              }`}
              onClick={() => setLocale("en")}
            >
              English
            </button>
          </div>
        </div>

        {/* Header */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <div className="text-3xl font-extrabold tracking-widest">{t(locale, "nameAge")}</div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <EducationIcon />
            {locale === "tr" ? "Eğitim" : "Education"}
          </h2>
          <ul className="list-disc ml-6 text-zinc-400">
            {education.map((edu, i) => (
              <li key={i}>{edu[locale]}</li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <ExperienceIcon />
            {t(locale, "experiencesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((exp, i) => (
              <div key={i} className="bg-zinc-950 rounded-lg p-4 shadow">
                <div className="text-lg font-extrabold tracking-widest">{exp.title}</div>
                <div className="text-md text-zinc-400">{exp.subtitle}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Areas & Technologies */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <SkillsIcon />
            {t(locale, "areas")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div>
              <div className="text-lg font-semibold mb-2">{t(locale, "webdev")}</div>
              <div className="ml-2 mt-2">
                <div className="font-medium">{t(locale, "backend")}</div>
                <ul className="ml-4 list-disc text-zinc-400">
                  {webTechnologies.backend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="font-medium mt-4">{t(locale, "frontend")}</div>
                <ul className="ml-4 list-disc text-zinc-400">
                  {webTechnologies.frontend.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Cyber Security */}
            <div>
              <div className="text-lg font-semibold mb-2">Cyber Security</div>
              <div className="ml-2 mt-2">
                <div className="font-medium">Tools</div>
                <ul className="ml-4 list-disc text-zinc-400">
                  {cyberSecurity.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <div className="font-medium mt-4">Fields</div>
                <ul className="ml-4 list-disc text-zinc-400">
                  {cyberSecurity.fields.map((field) => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Game Development */}
            <div>
              <div className="text-lg font-semibold mb-2">Game Development</div>
              <div className="ml-2 mt-2">
                <div className="font-medium">Tools & Topics</div>
                <ul className="ml-4 list-disc text-zinc-400">
                  {gameDevelopment.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Other */}
            <div>
              <div className="text-lg font-semibold mb-2">Other</div>
              <div className="ml-2 mt-2">
                <div className="font-medium">Tools & Topics</div>
                <ul className="ml-4 list-disc text-zinc-400">
                  {otherSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <ProjectsIcon />
            {t(locale, "projects")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <div key={i} className="rounded-lg bg-zinc-950 p-6 shadow-md transition hover:scale-[1.01] hover:shadow-lg">
                <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:underline">
                  {proj.name}
                </a>
                <div className="my-2">
                  <img src={proj.image} alt={proj.name} className="w-full max-w-xs rounded-md border border-zinc-800" />
                </div>
                <div className="text-zinc-400 mb-2 mt-5">{proj.desc[locale]}</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.tech.map((tech) => (
                    <span key={tech} className="bg-zinc-800 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {proj.youtube && (
                  <div className="mt-4">
                    <a
                      href={proj.youtube.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline text-sm"
                    >
                      {proj.youtube.label[locale]}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <AchievementsIcon />
            {t(locale, "achievements")}
          </h2>
          <ul className="list-disc ml-6 text-zinc-400">
            {achievements.map((ach, i) => (
              <li key={i}>{ach[locale]}</li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <LanguageIcon />
            {t(locale, "language")}
          </h2>
          <div className="text-zinc-300">{language[locale]}</div>
        </section>

        {/* Current Activities */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <CurrentIcon />
            {t(locale, "current")}
          </h2>
          <div className="text-zinc-300">{current[locale]}</div>
        </section>
        
        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            <ContactIcon />
            {locale === "tr" ? "İletişim" : "Contact"}
          </h2>
          <ul className="ml-2 flex flex-col gap-2">
            {contacts.map((c) => (
              <li key={c.url} className="flex items-center">
                {c.icon}
                <a
                  href={c.url}
                  target={c.url.startsWith("http") ? "_blank" : undefined}
                  rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-zinc-300 hover:text-rose-400 transition underline underline-offset-2"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
