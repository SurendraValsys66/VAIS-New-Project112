import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Type,
  Image,
  MousePointerClick,
  Minus,
  LogIn,
  LogOut,
  Plus,
} from "lucide-react";
import {
  createTextBlock,
  createImageBlock,
  createButtonBlock,
  createDividerBlock,
  createHeaderBlock,
  createFooterBlock,
  createSpacerBlock,
} from "./utils";

interface BlockToolbarProps {
  onAddBlock: (block: any) => void;
}

export const BlockToolbar: React.FC<BlockToolbarProps> = ({ onAddBlock }) => {
  const blocks = [
    {
      icon: Type,
      label: "Text",
      onClick: () => onAddBlock(createTextBlock()),
    },
    {
      icon: Image,
      label: "Image",
      onClick: () => onAddBlock(createImageBlock()),
    },
    {
      icon: MousePointerClick,
      label: "Button",
      onClick: () => onAddBlock(createButtonBlock()),
    },
    {
      icon: Minus,
      label: "Divider",
      onClick: () => onAddBlock(createDividerBlock()),
    },
    {
      icon: LogIn,
      label: "Header",
      onClick: () => onAddBlock(createHeaderBlock()),
    },
    {
      icon: LogOut,
      label: "Footer",
      onClick: () => onAddBlock(createFooterBlock()),
    },
    {
      icon: Plus,
      label: "Spacer",
      onClick: () => onAddBlock(createSpacerBlock()),
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <p className="text-sm font-semibold text-gray-700 mb-3">Add Blocks</p>
      <div className="grid grid-cols-2 gap-2">
        {blocks.map((block) => {
          const Icon = block.icon;
          return (
            <Tooltip key={block.label}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={block.onClick}
                  className="w-full flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{block.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{block.label} Block</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};
