import React from 'react';

interface ContrastControlProps {
  value: string;
  onChange: (value: string) => void;
}

export const ContrastControl: React.FC<ContrastControlProps> = ({ value, onChange }) => (
  <div className="space-y-2">
    <label htmlFor="contrast" className="block font-medium">
      Contrast
    </label>
    <select
      id="contrast"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <option value="normal">Normal</option>
      <option value="high">High Contrast</option>
    </select>
  </div>
);