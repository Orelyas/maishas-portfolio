export interface Portfolio {
  name?: string;
  projects: Project[];
}

interface Project {
  name: string;
  date?: string;
  type?: string;
  description?: string;
  assets?: string[];
}
