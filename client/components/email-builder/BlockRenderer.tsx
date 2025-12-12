import React from "react";
import { ContentBlock } from "./types";
import { TextBlockComponent } from "./blocks/TextBlockComponent";
import { ImageBlockComponent } from "./blocks/ImageBlockComponent";
import { ButtonBlockComponent } from "./blocks/ButtonBlockComponent";
import { DividerBlockComponent } from "./blocks/DividerBlockComponent";
import { HeaderBlockComponent } from "./blocks/HeaderBlockComponent";
import { FooterBlockComponent } from "./blocks/FooterBlockComponent";
import { SpacerBlockComponent } from "./blocks/SpacerBlockComponent";

interface BlockRendererProps {
  block: ContentBlock;
  isSelected: boolean;
  isEditing?: boolean;
  onBlockUpdate: (block: ContentBlock) => void;
  onBlockSelect?: (blockId: string) => void;
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({
  block,
  isSelected,
  isEditing,
  onBlockUpdate,
  onBlockSelect,
}) => {
  const handleClick = () => {
    onBlockSelect?.(block.id);
  };

  switch (block.type) {
    case "text":
      return (
        <div onClick={handleClick}>
          <TextBlockComponent
            block={block}
            isSelected={isSelected}
            isEditing={isEditing || false}
            onEdit={() => onBlockSelect?.(block.id)}
            onContentChange={(content) => onBlockUpdate({ ...block, content })}
          />
        </div>
      );
    case "image":
      return (
        <div onClick={handleClick}>
          <ImageBlockComponent
            block={block}
            isSelected={isSelected}
            onSrcChange={(src) => onBlockUpdate({ ...block, src })}
            onDimensionChange={(width, height) =>
              onBlockUpdate({ ...block, width, height })
            }
          />
        </div>
      );
    case "button":
      return (
        <div onClick={handleClick}>
          <ButtonBlockComponent block={block} isSelected={isSelected} />
        </div>
      );
    case "divider":
      return (
        <div onClick={handleClick}>
          <DividerBlockComponent block={block} isSelected={isSelected} />
        </div>
      );
    case "header":
      return (
        <div onClick={handleClick}>
          <HeaderBlockComponent
            block={block}
            isSelected={isSelected}
            onLogoChange={(logo) => onBlockUpdate({ ...block, logo })}
          />
        </div>
      );
    case "footer":
      return (
        <div onClick={handleClick}>
          <FooterBlockComponent
            block={block}
            isSelected={isSelected}
            onContentChange={(content) => onBlockUpdate({ ...block, content })}
          />
        </div>
      );
    case "spacer":
      return (
        <div onClick={handleClick}>
          <SpacerBlockComponent block={block} isSelected={isSelected} />
        </div>
      );
    default:
      return null;
  }
};
