# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Deploy to Netlify

This project includes [`netlify.toml`](netlify.toml), so Netlify can build and serve it with the Vite defaults:

- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: `.` (root directory - no subdirectory needed)

When creating the site in Netlify, leave the base directory empty or set it to `.` since this is a standalone repository. Netlify will install the dependencies, run the build, and apply the SPA redirects from the `netlify.toml` configuration.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for reference.
