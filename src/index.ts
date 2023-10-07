import { ColorScheme } from './color-scheme';

/**
 * Checks if the browser supports the necessary API to determine the user's preferred color scheme.
 * @returns {boolean} - Returns `true` if the API is supported, otherwise `false`.
 */
export function isColorSchemeSupported(): boolean {
    return !!(window.matchMedia && typeof window.matchMedia("(prefers-color-scheme: dark)").matches === 'boolean');
}

/**
 * Checks if dark mode is enabled.
 * @returns {boolean} - Returns `true` if dark mode is enabled, otherwise `false`.
 */
export function isDarkModeEnabled(): boolean {
    return isColorSchemeSupported() && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Checks if light mode is enabled.
 * @returns {boolean} - Returns `true` if light mode is enabled, otherwise `false`.
 */
export function isLightModeEnabled(): boolean {
    return isColorSchemeSupported() && !window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/**
 * Detects the user's preferred color scheme.
 * @returns {ColorScheme} - Returns `ColorScheme.Dark` if dark mode is enabled,
 *                          `ColorScheme.Light` if light mode is enabled,
 *                          or `ColorScheme.Unsupported` if the necessary API is not supported.
 */
export function detectColorScheme(): ColorScheme {
    if (!isColorSchemeSupported()) {
        return ColorScheme.Unsupported;
    }

    return isDarkModeEnabled() ? ColorScheme.Dark : ColorScheme.Light;
}
