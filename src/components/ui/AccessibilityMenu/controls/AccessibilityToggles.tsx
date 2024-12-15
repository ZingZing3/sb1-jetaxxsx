import React from 'react';
import { AccessibilitySettings } from '../types';

interface AccessibilityTogglesProps {
  settings: AccessibilitySettings;
  onChange: (key: keyof AccessibilitySettings, value: boolean) => void;
}

export const AccessibilityToggles: React.FC<AccessibilityTogglesProps> = ({ settings, onChange }) => (
  <div className="space-y-3">
    <Toggle
      id="reduced-motion"
      label="Reduce Motion"
      checked={settings.reducedMotion}
      onChange={(checked) => onChange('reducedMotion', checked)}
    />
    <Toggle
      id="dyslexia-mode"
      label="Dyslexia Friendly"
      checked={settings.dyslexiaMode}
      onChange={(checked) => onChange('dyslexiaMode', checked)}
    />
    <Toggle
      id="focus-mode"
      label="Focus Mode"
      checked={settings.focusMode}
      onChange={(checked) => onChange('focusMode', checked)}
    />
  </div>
);

interface ToggleProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ id, label, checked, onChange }) => (
  <label htmlFor={id} className="flex items-center space-x-3 cursor-pointer">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="form-checkbox h-5 w-5 text-primary-500 rounded focus:ring-primary-500"
    />
    <span className="text-gray-700">{label}</span>
  </label>
);