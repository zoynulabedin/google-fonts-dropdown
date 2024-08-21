# Google Fonts Dropdown React Component

A simple React component for selecting Google Fonts, compatible with React, Next.js, and Remix.

## Installation

Install the package via npm:

```bash
npm install google-fonts-dropdown
```

```jsx
import React from 'react';
import GoogleFontsDropdown from 'google-fonts-dropdown';

const MyComponent: React.FC = () => {
  const handleFontSelect = () => {
    console.log('Selected Font:', font);
  };

  return (
    <form>
      <GoogleFontsDropdown
        apiKey="YOUR_GOOGLE_FONTS_API_KEY"
        name="font"
        title="select a font"
        onFontSelect={handleFontSelect}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyComponent



### Connect with me:

<a href="https://twitter.com/Zoynul4" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="sabbir" height="30" width="40" /></a>
<a href="https://linkedin.com/in/md-zoynul-abedin-15905a184/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="sabbirshouvo" height="30" width="40" /></a>

<a href="https://fb.com/zoynuldotcom" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="shouvo.sabbir" height="30" width="40" /></a>

### Hire Me:

<a href="https://www.fiverr.com/trust_coder1?up_rollout=true" target="blank"><img align="center" src="https://static.vecteezy.com/system/resources/thumbnails/029/463/373/small_2x/fiverr-app-icon-freelancing-market-is-perfect-for-use-in-any-mobile-app-related-project-modern-design-with-the-iconic-fiver-logo-in-a-clean-use-it-on-your-website-free-vector.jpg" alt="zoynul" height="30" width="40" /></a>
```
