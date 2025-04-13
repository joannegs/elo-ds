import React from 'react';

interface ColorBoxProps {
  name: string;
  hex: string;
  rgb: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ name, hex, rgb }) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full p-4 rounded-lg shadow-sm border border-gray-200 bg-white">
      <div className="w-full h-14 rounded-md border" style={{ backgroundColor: hex }}></div>
      <div className="text-sm font-semibold text-gray-800 mt-2">{name}</div>
      <div className="text-xs text-gray-500">{hex}</div>
      <div className="text-xs text-gray-500">{rgb}</div>
    </div>
  );
};

interface ColorGroupProps {
  title: string;
  colors: ColorBoxProps[];
}

export const ColorGroup: React.FC<ColorGroupProps> = ({ title, colors }) => {
  return (
    <div className="mb-12">
      <h3 className="font-bold mb-6 text-gray-900">{title}</h3>
      <div className="grid grid-cols-3 gap-5">
        {colors.map((color, index) => (
          <ColorBox key={index} {...color} />
        ))}
      </div>
    </div>
  );
};
