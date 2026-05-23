export interface ContentItem {
  id: number;
  heading: "Stories" | "Blogs" | "Publications";
  content_about: string;
  detail_description: string;
  image: string;
  video?: string;
  DateTime: string;
}