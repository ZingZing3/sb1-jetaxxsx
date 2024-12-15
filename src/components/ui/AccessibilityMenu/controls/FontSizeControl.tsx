import React from 'react';

interface FontSizeControlProps {
  value: string;
  onChange: (value: string) => void;
}

export const FontSizeControl: React.FC<FontSizeControlProps> = ({ value, onChange }) => (
  <div className="space-y-2">
    <label htmlFor="font-size" className="block font-medium">
      Font Size
    </label>
    <select
      id="font-size"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <option value="normal">Normal</option>
      <option value="large">Large</option>
      <option value="x-large">Extra Large</option>
    </select>
  </div>
);