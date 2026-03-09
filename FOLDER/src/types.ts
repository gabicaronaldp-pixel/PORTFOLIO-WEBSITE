export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  previewAvailable: boolean;
  languages: string[];
  tags: string[];
  status: 'completed' | 'in-progress';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  date: string;
  pdfUrl?: string;
}

export interface Hackathon {
  id: string;
  title: string;
  description: string;
  date: string;
  position?: string;
  image?: string;
}

export interface Feedback {
  id: string;
  name: string;
  image: string;
  role: string;
  rating: number;
  skillTag: string;
  productivityBoost: string;
  comment: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}
