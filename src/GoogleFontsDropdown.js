import React, { useState, useEffect } from "react";

const GoogleFontsDropdown = ({
  apiKey,
  onFontSelect,
  name,
  title,
  className,
}) => {
  const [fonts, setFonts] = useState([]);
  const [selectedFont, setSelectedFont] = useState("");

  useEffect(() => {
    const fetchFonts = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
        );
        const data = await response.json();
        setFonts(data.items);
      } catch (error) {
        console.error("Error fetching Google Fonts:", error);
      }
    };

    fetchFonts();
  }, [apiKey]);

  const handleFontChange = (event) => {
    const font = event.target.value;
    setSelectedFont(font);
    if (onFontSelect) {
      onFontSelect(font);
    }
  };

  return (
    <div>
      <select
        className={`${className}`}
        name={name}
        value={selectedFont}
        onChange={handleFontChange}
      >
        <option value="">{title}</option>
        {fonts.map((font) => (
          <option key={font.family} value={font.family}>
            {font.family}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GoogleFontsDropdown;
