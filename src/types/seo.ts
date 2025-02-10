export interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "profile" | "video.movie"; // Add more if needed
}
