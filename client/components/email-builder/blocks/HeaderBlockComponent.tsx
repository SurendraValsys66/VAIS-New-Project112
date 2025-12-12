import React from "react";
import { HeaderBlock } from "../types";
import { Upload } from "lucide-react";

interface HeaderBlockComponentProps {
  block: HeaderBlock;
  isSelected: boolean;
  onLogoChange: (src: string) => void;
}

export const HeaderBlockComponent: React.FC<HeaderBlockComponentProps> = ({
  block,
  isSelected,
  onLogoChange,
}) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onLogoChange(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`transition-all ${
        isSelected ? "ring-2 ring-valasys-orange" : ""
      }`}
      style={{
        backgroundColor: block.backgroundColor,
        padding: `${block.padding}px`,
        textAlign: block.alignment as any,
      }}
    >
      {block.logo ? (
        <img
          src={block.logo}
          alt="Logo"
          style={{ maxWidth: "200px", height: "auto" }}
        />
      ) : (
        <label className="flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded p-4">
          <div className="flex flex-col items-center">
            <Upload className="w-6 h-6 text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">Click to add logo</p>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};
