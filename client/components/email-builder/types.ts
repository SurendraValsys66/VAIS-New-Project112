export type BlockType =
  | "text"
  | "image"
  | "button"
  | "divider"
  | "header"
  | "footer"
  | "spacer";

export interface TextBlock {
  type: "text";
  id: string;
  content: string;
  fontSize: number;
  fontColor: string;
  backgroundColor: string;
  alignment: "left" | "center" | "right";
  fontWeight: "normal" | "bold";
  fontStyle: "normal" | "italic";
}

export interface ImageBlock {
  type: "image";
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  alignment: "left" | "center" | "right";
}

export interface ButtonBlock {
  type: "button";
  id: string;
  text: string;
  link: string;
  backgroundColor: string;
  textColor: string;
  padding: number;
  borderRadius: number;
  alignment: "left" | "center" | "right";
}

export interface DividerBlock {
  type: "divider";
  id: string;
  color: string;
  height: number;
  margin: number;
}

export interface HeaderBlock {
  type: "header";
  id: string;
  logo: string;
  backgroundColor: string;
  padding: number;
  alignment: "left" | "center" | "right";
}

export interface FooterBlock {
  type: "footer";
  id: string;
  content: string;
  backgroundColor: string;
  textColor: string;
  fontSize: number;
  padding: number;
}

export interface SpacerBlock {
  type: "spacer";
  id: string;
  height: number;
  backgroundColor: string;
}

export type ContentBlock =
  | TextBlock
  | ImageBlock
  | ButtonBlock
  | DividerBlock
  | HeaderBlock
  | FooterBlock
  | SpacerBlock;

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  blocks: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  backgroundColor: string;
  padding: number;
}

export interface BlockSettings {
  [key: string]: any;
}
