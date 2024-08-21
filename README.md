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


## About the Developer

Hi! I'm zoynul, a seasoned Shopify app developer with over 2 years of experience in web development. I specialize in creating powerful, efficient web applications using technologies like React, Next.js, Remix, and Shopify. I'm passionate about delivering high-quality solutions that meet my clients' needs.

### Personal Information

- **Name**: zoynul
- **Location**: Bangladesh (Optional)
- **Email**: [trustcodernet@gmail.com](mailto:trustcodernet@gmail.com)
- **Whatsapp**: +8801735361634 (Optional)

### Business Information

- **Business Name**: Appaza Dev
- **Website**: [https://appaza.dev](https://appaza.dev)
- **Services Offered**:
  - Shopify App Development
  - Custom Web Development
  - WordPress and Shopify Development
  - API Integration and Development
  - Technical Consulting

### Connect with Me

- **Fiverr Profile**: [https://www.fiverr.com/trust_coder1](https://www.fiverr.com/trust_coder1)
- **Facebook**: [https://www.facebook.com/appaza.dev](https://www.facebook.com/appaza.dev)
- **LinkedIn**: [https://www.linkedin.com/company/appazadev](https://www.linkedin.com/company/appazadev)
```
# google-fonts-dropdown
