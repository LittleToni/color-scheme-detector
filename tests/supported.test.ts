/**
 * @jest-environment jsdom
 */

import './mocks/matchMediaDarkMode.mock';
import { isColorSchemeSupported } from '../src/index';

describe('ColorSchemeDetector', () => {
  test('isColorSchemeSupported returns true when matchMedia is supported', () => {
    expect(isColorSchemeSupported()).toBe(true);
  });
});
