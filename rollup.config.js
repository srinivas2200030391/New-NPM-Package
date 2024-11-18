import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
    name: "srinivas-first-package",
  },
  external: ["react", "react-dom"], // Specify the external dependencies
  plugins: [typescript({ tsconfig: "./tsconfig.json" })],
};
