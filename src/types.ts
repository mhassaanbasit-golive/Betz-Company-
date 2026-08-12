export interface Project {
  id: string;
  title: string;
  acres: number;
  location: string;
  status: string;
  type: string;
  isd: string;
  description: string;
  imageUrl: string;
}

export interface BrokerageParcel {
  title: string;
  location: string;
  status?: string;
}

export interface ServicePillar {
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export type PageId = "home" | "overview" | "current-projects" | "previous-projects" | "services" | "contact";
