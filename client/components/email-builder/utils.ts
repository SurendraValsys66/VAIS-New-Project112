import {
  ContentBlock,
  EmailTemplate,
  TextBlock,
  ImageBlock,
  ButtonBlock,
  DividerBlock,
  HeaderBlock,
  FooterBlock,
  SpacerBlock,
} from "./types";

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function createTextBlock(content = "Click to edit text"): TextBlock {
  return {
    type: "text",
    id: generateId(),
    content,
    fontSize: 16,
    fontColor: "#000000",
    backgroundColor: "#ffffff",
    alignment: "left",
    fontWeight: "normal",
    fontStyle: "normal",
  };
}

export function createImageBlock(src = ""): ImageBlock {
  return {
    type: "image",
    id: generateId(),
    src,
    alt: "Image",
    width: 300,
    height: 200,
    alignment: "center",
  };
}

export function createButtonBlock(text = "Click me"): ButtonBlock {
  return {
    type: "button",
    id: generateId(),
    text,
    link: "#",
    backgroundColor: "#FF6A00",
    textColor: "#ffffff",
    padding: 12,
    borderRadius: 4,
    alignment: "center",
  };
}

export function createDividerBlock(): DividerBlock {
  return {
    type: "divider",
    id: generateId(),
    color: "#e0e0e0",
    height: 1,
    margin: 20,
  };
}

export function createHeaderBlock(logo = ""): HeaderBlock {
  return {
    type: "header",
    id: generateId(),
    logo,
    backgroundColor: "#ffffff",
    padding: 20,
    alignment: "center",
  };
}

export function createFooterBlock(
  content = "© 2024 Valasys. All rights reserved.",
): FooterBlock {
  return {
    type: "footer",
    id: generateId(),
    content,
    backgroundColor: "#f5f5f5",
    textColor: "#666666",
    fontSize: 12,
    padding: 20,
  };
}

export function createSpacerBlock(height = 20): SpacerBlock {
  return {
    type: "spacer",
    id: generateId(),
    height,
    backgroundColor: "#ffffff",
  };
}

export function createEmptyTemplate(): EmailTemplate {
  return {
    id: generateId(),
    name: "Untitled Template",
    subject: "Email Subject",
    blocks: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    backgroundColor: "#ffffff",
    padding: 20,
  };
}

export function renderBlockToHTML(block: ContentBlock): string {
  switch (block.type) {
    case "text":
      return `<p style="font-size: ${block.fontSize}px; color: ${block.fontColor}; background-color: ${block.backgroundColor}; text-align: ${block.alignment}; font-weight: ${block.fontWeight}; font-style: ${block.fontStyle};">${block.content}</p>`;
    case "image":
      return `<img src="${block.src}" alt="${block.alt}" style="width: ${block.width}px; height: ${block.height}px; display: block; margin: 0 auto;" />`;
    case "button":
      return `<a href="${block.link}" style="background-color: ${block.backgroundColor}; color: ${block.textColor}; padding: ${block.padding}px 20px; border-radius: ${block.borderRadius}px; text-decoration: none; display: inline-block; text-align: center;">${block.text}</a>`;
    case "divider":
      return `<hr style="border: none; border-top: ${block.height}px solid ${block.color}; margin: ${block.margin}px 0;" />`;
    case "header":
      return `<div style="background-color: ${block.backgroundColor}; padding: ${block.padding}px; text-align: ${block.alignment};"><img src="${block.logo}" alt="Logo" style="max-width: 200px; height: auto;" /></div>`;
    case "footer":
      return `<footer style="background-color: ${block.backgroundColor}; color: ${block.textColor}; font-size: ${block.fontSize}px; padding: ${block.padding}px; text-align: center;">${block.content}</footer>`;
    case "spacer":
      return `<div style="height: ${block.height}px; background-color: ${block.backgroundColor};"></div>`;
    default:
      return "";
  }
}

export function renderTemplateToHTML(template: EmailTemplate): string {
  const bodyContent = template.blocks
    .map((block) => renderBlockToHTML(block))
    .join("");
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${template.subject}</title>
</head>
<body style="background-color: ${template.backgroundColor}; padding: ${template.padding}px; font-family: Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto;">
    ${bodyContent}
  </div>
</body>
</html>`;
}

export function saveTemplateToLocalStorage(template: EmailTemplate): void {
  const templates = getTemplatesFromLocalStorage();
  const index = templates.findIndex((t) => t.id === template.id);
  if (index > -1) {
    templates[index] = template;
  } else {
    templates.push(template);
  }
  localStorage.setItem("email_templates", JSON.stringify(templates));
}

export function getTemplatesFromLocalStorage(): EmailTemplate[] {
  const templates = localStorage.getItem("email_templates");
  return templates ? JSON.parse(templates) : [];
}

export function deleteTemplateFromLocalStorage(id: string): void {
  const templates = getTemplatesFromLocalStorage();
  const filtered = templates.filter((t) => t.id !== id);
  localStorage.setItem("email_templates", JSON.stringify(filtered));
}

export function getTemplateById(id: string): EmailTemplate | null {
  const templates = getTemplatesFromLocalStorage();
  return templates.find((t) => t.id === id) || null;
}
