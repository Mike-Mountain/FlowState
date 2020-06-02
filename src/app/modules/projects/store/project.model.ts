export interface Project {
  id: string;
  title: string;
  slug: string;
  url: string;
  githubUrl: string;
  screenshots: File[];
  video: File;
}

export function createProject(params?: Partial<Project>) {
  return {
    id: params?.id,
    title: params?.title,
    slug: params?.slug,
    url: params?.url,
    githubUrl: params?.url,
    screenshots: params?.screenshots ?? [],
    video: params?.video
  } as Project;
}
