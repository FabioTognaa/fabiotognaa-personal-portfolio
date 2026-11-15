import { educationLogos } from "./static-assets";
import type { ExperienceEntryData } from "./types";

/**
 * Schema entry:
 * - id: chiave React
 * - logo, logoAlt: asset logo azienda
 * - company: nome azienda o contesto lavorativo
 * - place: sede
 * - roles: posizioni ricoperte, dalla più vecchia alla più recente
 * - summary: 1–2 frasi sul contesto
 * - highlights: array di responsabilità, stack o risultati
 */

export const experiencePath = [
  {
    id: "jevis",
    logo: educationLogos.jevis,
    logoAlt: "Logo JEVIS",
    company: "JEVIS",
    place: "Pisa",
    roles: [
      { ruolo: "Junior IT Associate", period: "Apr 2026 – Ott 2026" },
      { ruolo: "IT Associate", period: "Ott 2026 – now" },
    ],
    summary:
      "Progettazione, gestione e consulenza IT su ambienti clienti, con sviluppo software interni a supporto dell’offerta tecnologica dell’azienda.",
    highlights: [
      "Gestione e monitoraggio di ambienti e servizi IT",
      "Stack: ambienti Windows/Linux, Wordpress con pipeline Headless CMS e Python.",
      "Framework: React, Tailwind, Fastapi, PostgreSQL",
    ],
  },
] satisfies ExperienceEntryData[];
