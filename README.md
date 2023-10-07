# Color Scheme Detector

This package enables detection of a user's preferred color scheme (dark or light mode) in a browser environment.

## Installation

```sh
npm install color-scheme-detector
```

## Usage

```javascript
import {
  isColorSchemeSupported,
  isDarkModeEnabled,
  isLightModeEnabled,
  detectColorScheme
} from 'color-scheme-detector';
```

- isColorSchemeSupported(): Checks if color scheme detection is supported.
- isDarkModeEnabled(): Checks if dark mode is enabled.
- isLightModeEnabled(): Checks if light mode is enabled.
- detectColorScheme(): Detects the user's preferred color scheme, returning 'dark', 'light' or 'unsupported'.
