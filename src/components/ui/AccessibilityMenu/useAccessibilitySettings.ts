import { useState, useCallback } from 'react';
import { AccessibilitySettings } from './types';

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  contrast: 'normal',
  reducedMotion: false,
  dyslexiaMode: false,
  focusMode: false
};

export const useAccessibilitySettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState(defaultSettings);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const updateSetting = useCallback(<K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      document.documentElement.setAttribute(`data-${key}`, String(value));
      return newSettings;
    });
  }, []);

  return {
    isOpen,
    toggleMenu,
    settings,
    updateSetting
  };
};