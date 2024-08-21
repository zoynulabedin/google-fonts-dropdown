## Google Fonts Dropdown

[![npm version](https://badge.fury.io/js/google-fonts-dropdown.svg)](https://badge.fury.io/js/google-fonts-dropdown.svg)
[![License](https://img.shields.io/npm/l/google-fonts-dropdown.svg)](https://www.npmjs.com/package/google-fonts-dropdown)
[![Downloads](https://img.shields.io/npm/dt/google-fonts-dropdown.svg)](https://www.npmjs.com/package/google-fonts-dropdown)

** Google Fonts Dropdown ** A simple React component for selecting Google Fonts, compatible with React, Next.js, and Remix.

## Features

- **Feature 1**: Dropdown to select Google Fonts.
- **Feature 2**: tailwind support.

## Installation

To install the package, use npm or Yarn:

```bash
npm i google-fonts-dropdown
```

```typescript
import React from "react";
import GoogleFontsDropdown from "google-fonts-dropdown";

const MyComponent: React.FC = () => {
  const handleFontSelect = () => {
    console.log("Selected Font:", font);
  };

  return (
    <form>
      <GoogleFontsDropdown
        apiKey="YOUR_GOOGLE_FONTS_API_KEY"
        className=""
        name="font"
        title="select a font"
        onFontSelect={handleFontSelect}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyComponent;
```
