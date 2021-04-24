export interface Member {
  image: string;
  name: string;
  education: null | string[];
  researchInterest: null | string;
}

export interface FormerMember {
  name: string;
  currentPosition: null | string;
}

export interface Paper {
  url: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  details: string; // e.g. "submitted", "accepted", or "volume, pages"
  graphical: string;
}
