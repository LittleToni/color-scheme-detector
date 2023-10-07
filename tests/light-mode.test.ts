/**
 * @jest-environment jsdom
 */

import './mocks/matchMediaLightMode.mock';
import { ColorScheme } from '../src/color-scheme';
import { detectColorScheme, isDarkModeEnabled, isLightModeEnabled } from '../src/index';

describe('ColorSchemeDetector', () => {
  test('isLightModeEnabled returns true when light mode is enabled', () => {
    expect(isLightModeEnabled()).toBe(true);
  });

  test('isDarkModeEnabled returns false when light mode is enabled', () => {
    expect(isDarkModeEnabled()).toBe(false);
  });

  test('detectColorScheme returns light when light mode is enabled', () => {
    expect(detectColorScheme()).toBe(ColorScheme.Light);
  });
});
