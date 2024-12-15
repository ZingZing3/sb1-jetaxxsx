import React, { useState } from 'react';
import { Settings } from 'lucide-react';

const AccessibilityMenu = () => {
  const [settings, setSettings] = useState({
    fontSize: 'normal',
    contrast: 'normal',
    reducedMotion: false,
    dyslexiaMode: false,
    focusMode: false
  });

  const updateSetting = (key: keyof typeof settings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    document.documentElement.setAttribute(`data-${key}`, value);
  };

  return (
    <div className="fixed right-4 top-20 z-50">
      <button
        aria-label="Accessibility Settings"
        className="p-2 bg-white rounded-full shadow-lg"
      >
        <Settings className="w-6 h-6" />
      </button>

      <div className="mt-2 p-4 bg-white rounded-lg shadow-xl">
        <h2 className="text-lg font-bold mb-4">Accessibility Settings</h2>
        
        {/* Font Size */}
        <div className="mb-4">
          <label className="block mb-2">Font Size</label>
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting('fontSize', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="x-large">Extra Large</option>
          </select>
        </div>

        {/* Contrast */}
        <div className="mb-4">
          <label className="block mb-2">Contrast</label>
          <select
            value={settings.contrast}
            onChange={(e) => updateSetting('contrast', e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="normal">Normal</option>
            <option value="high">High Contrast</option>
          </select>
        </div>

        {/* Toggles */}
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
              className="mr-2"
            />
            Reduce Motion
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.dyslexiaMode}
              onChange={(e) => updateSetting('dyslexiaMode', e.target.checked)}
              className="mr-2"
            />
            Dyslexia Friendly
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={settings.focusMode}
              onChange={(e) => updateSetting('focusMode', e.target.checked)}
              className="mr-2"
            />
            Focus Mode
          </label>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityMenu;