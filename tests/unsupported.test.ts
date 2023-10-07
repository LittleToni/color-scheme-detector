/**
 * @jest-environment jsdom
 */

import { ColorScheme } from '../src/color-scheme';
import { detectColorScheme, isColorSchemeSupported } from '../src/index';

describe('ColorSchemeDetector', () => {
  test('isColorSchemeSupported returns false when matchMedia is not supported', () => {
    expect(isColorSchemeSupported()).toBe(false);
  });

  test('detectColorScheme returns unsupported when matchMedia is not supported', () => {
    expect(detectColorScheme()).toBe(ColorScheme.Unsupported);
  });
});
