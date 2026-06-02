// Awards, recognition and community involvement.

export interface Achievement {
  title: string;
  detail: string;
  year: string;
  kind: "award" | "community";
}

export const achievements: Achievement[] = [
  {
    title: "AWS Machine Learning Engineer Scholarship",
    detail: "Gold Badge — selected scholarship cohort for the AWS ML Engineer track.",
    year: "2022",
    kind: "award",
  },
  {
    title: "Access Bank Lagos City Marathon",
    detail: "Finisher Medal — completed the full Lagos City Marathon.",
    year: "2026",
    kind: "award",
  },
  {
    title: "President, Red Cross Society — NYSC",
    detail:
      "Led the Red Cross Society chapter during national service: coordinated first-aid workshops, blood-donation drives and community outreach, managing diverse volunteer teams.",
    year: "2023",
    kind: "community",
  },
];

export interface Education {
  institution: string;
  credential: string;
  detail: string;
  period: string;
}

export const education: Education[] = [
  {
    institution: "University of Benin",
    credential: "B.Eng — First Class Honours",
    detail:
      "Engineering degree with a final-year dissertation on an electric bicycle prototype.",
    period: "Benin City, Nigeria",
  },
];
