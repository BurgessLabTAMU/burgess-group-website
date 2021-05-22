export interface Member {
  image: string;
  name: string;
  position: string;
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

export interface Software {
  title: string;
  description: string;
  github: string;
  webapp: string;
  graphical: string;
  reference: string;
}
