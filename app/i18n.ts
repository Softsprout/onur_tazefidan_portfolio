const translations = {
  tr: {
    biography: "Biyografi",
    roles: [
      { title: "Kurucu", subtitle: "Softsprout" },
      { title: "Siber Güvenlik ve Yazılım Eğitmeni", subtitle: "Nova IT Academy" },
      { title: "Hackviser Kampüs Elçisi", subtitle: "Necmettin Erbakan Üniversitesi" },
      { title: "Takım Üyesi", subtitle: "Siber Vatan | ZAYOTEM (Tersine Mühendislik & Zararlı Yazılım Analizi)" },
      { title: "KOSKİ - Coğrafi Bilgi Sistemi Birimi | STAJ", subtitle: "Full Stack Development (Java & React & PostgreSQL & Geoserver)" },
      { title: "Cybersoft - Yazılım Geliştirme Birimi | STAJ", subtitle: "Full Stack Development (Java & React & PostgreSQL & Kafka & C# & Python)" },
    ],
    areas: "Çalışma Alanları",
    webdev: "Web Geliştirme",
    frontend: "Frontend",
    backend: "Backend",
    technologies: "Teknolojiler",
    projects: "Projeler",
    achievements: "Başarımlar",
    current: "Aktif Olarak",
    language: "Dil",
    experiencesTitle: "Yetkinlikler & Deneyimler",
    nameAge: "Onur, 21",
    skillsTitle: "Yetenekler",
  },
  en: {
    biography: "Biography",
    roles: [
      { title: "Founder", subtitle: "Softsprout" },
      { title: "Cyber Security & Software Instructor", subtitle: "Nova IT Academy" },
      { title: "Hackviser Campus Ambassador", subtitle: "Necmettin Erbakan University" },
      { title: "Team Member", subtitle: "Siber Vatan | ZAYOTEM (Reverse Engineering & Malware Analysis)" },
      { title: "KOSKI - Geographic Information Systems Unit | INTERN", subtitle: "Full Stack Development (Java & React & PostgreSQL & Geoserver) | INTERN - 1" },
      { title: "Cybersoft - Software Development Unit | INTERN", subtitle: "Full Stack Development (Java & React & PostgreSQL & Kafka & C# & Python) | INTERN - 2" },
    ],
    areas: "Areas",
    webdev: "Web Development",
    frontend: "Frontend",
    backend: "Backend",
    technologies: "Technologies",
    projects: "Projects",
    achievements: "Achievements",
    current: "Currently",
    language: "Language",
    experiencesTitle: "Skills & Experiences",
    nameAge: "Onur, 21",
    skillsTitle: "Skills",
  },
};

export function t(locale: "tr" | "en", key: string) {
  return (translations[locale] as Record<string, any>)[key] ?? key;
}

export function getRoles(locale: "tr" | "en") {
  return translations[locale].roles;
}
