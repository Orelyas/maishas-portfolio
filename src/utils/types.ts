export interface Portfolio {
  name?: string;
  projects: Project[];
}

export interface Project {
  name: string;
  date?: string;
  type?: string;
  description?: string;
  assets?: string[];
}
