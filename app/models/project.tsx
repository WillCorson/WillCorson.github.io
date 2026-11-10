export default interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  tech: string[];
  links: {
    demo?: string;
  };
  displayFiles: string[];
  stlCarousel: boolean;
}