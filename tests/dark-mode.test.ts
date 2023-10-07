/**
 * @jest-environment jsdom
 */

import './mocks/matchMediaDarkMode.mock';
import { ColorScheme } from '../src/color-scheme';
import { detectColorScheme, isDarkModeEnabled, isLightModeEnabled } from '../src/index';

describe('ColorSchemeDetector', () => {
  test('isDarkModeEnabled returns true when dark mode is enabled', () => {
    expect(isDarkModeEnabled()).toBe(true);
  });

  test('isLightModeEnabled returns false when dark mode is enabled', () => {
    expect(isLightModeEnabled()).toBe(false);
  });

  test('detectColorScheme returns dark when dark mode is enabled', () => {
    expect(detectColorScheme()).toBe(ColorScheme.Dark);
  });
});
