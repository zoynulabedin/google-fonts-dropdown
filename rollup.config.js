import babel from "rollup-plugin-babel";

export default {
  input: "src/GoogleFontsDropdown.js",
  output: {
    file: "dist/index.js",
    format: "cjs", // CommonJS format
    exports: "default",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
  ],
  external: ["react", "react-dom"],
};
