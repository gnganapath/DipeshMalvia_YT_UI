# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


project creation steps:
======================
cmd:>npm create vite@latest react-recall-feb2026 -- --template react-ts   or npm create vite <project-title>

framework -> React
React -> TypeScript

npm run dev to run the project

in pacakge.json
 "scripts": {
    "dev": "vite --port 3000", to run in static port

Add jest RTL to run unit test case configs,


Setting up Vitest
Vitest test runner is optimised for Vite-powered projects.

npm install -D vitest
npm install -D @testing-library/react @testing-library/jest-dom jsdom
First package, @testing-library/react, is for component testing, second, @testing-library/jest-dom, is for DOM assertions, and lastly, jsdom, is for simulating a browser environment in Node for testing purposes.

Update vite.config.ts to include testing configurations

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
Changes we made:

Added type definitions at the beginning of the file
globals: true means global variables will be available during tests like 'describe, it, expect' so we don't have to import it in every test file
Specified 'jsdom' as the test environment, simulating a browser environment
Defined 'setupFiles' to execute necessary code before running the tests. This is a perfect segue to create setupTests.ts.
Create setupTests.ts
Create setupTests.ts in the src directory
Paste this into setupTests.ts
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
Here, we bring Jest's DOM matchers into Vite, making testing feel more familiar and easier for users familiar with Jest.

Add "test": "vitest" to package.json
Test script in package.json
This will allow you to run your tests using npm test.
Onto, to our first test!

Writing our first test
Let's create a new file called App.test.tsx in the src folder.
Here's a passing test for you to get started:
import { screen, render } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("should render the title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Vite + React");
  });
});

If nay error< 
Add "types": ["vitest/globals", "@testing-library/jest-dom"], to tsconfig.json or tsconfig.node.js file

Still some SVG logo related issue, 

Fix the svg npm lib or excllude for first time load.

npm run dev
npm test