import React from 'react';
import { Settings } from 'lucide-react';
import { useAccessibilitySettings } from './useAccessibilitySettings';
import { FontSizeControl } from './controls/FontSizeControl';
import { ContrastControl } from './controls/ContrastControl';
import { AccessibilityToggles } from './controls/AccessibilityToggles';

const AccessibilityMenu = () => {
  const { isOpen, toggleMenu, settings, updateSetting } = useAccessibilitySettings();

  return (
    <div className="fixed right-4 top-20 z-50">
      <button
        aria-label="Accessibility Settings"
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
        onClick={toggleMenu}
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div 
          id="accessibility-menu"
          className="mt-2 p-4 bg-white rounded-lg shadow-xl"
          role="dialog"
          aria-label="Accessibility settings"
        >
          <h2 className="text-lg font-bold mb-4">Accessibility Settings</h2>
          
          <div className="space-y-4">
            <FontSizeControl 
              value={settings.fontSize}
              onChange={(value) => updateSetting('fontSize', value)}
            />
            
            <ContrastControl
              value={settings.contrast}
              onChange={(value) => updateSetting('contrast', value)}
            />
            
            <AccessibilityToggles
              settings={settings}
              onChange={updateSetting}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityMenu;