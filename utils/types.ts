export interface Source {
    id: string | null;
    name: string;
  }
  
  export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
  }
  
  export interface News {
    status: string;
    totalResults: number;
    articles: Article[];
  }
  