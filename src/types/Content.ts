export interface Paragraphs {
  introduction?: string;
  start?: string;
  challenges?: string;
  growth?: string;
}
export interface Author {
  name: string;
  image: string;
  link: string;
}
export interface Article {
  title: string;
  paragraphs: Paragraphs;
  images: string[];
  author: Author;
}