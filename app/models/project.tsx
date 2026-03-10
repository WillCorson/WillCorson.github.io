export default interface Project {
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