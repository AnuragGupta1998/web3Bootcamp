# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# dependencies required

npm install @solana/wallet-adapter-base \\
    @solana/wallet-adapter-react \\
    @solana/wallet-adapter-react-ui \\
    @solana/wallet-adapter-wallets \\
    @solana/web3.js

npm i @solana/spl-token

## add node-polyfills to project to support buffer in browser
npm install --save-dev vite-plugin-node-polyfills

## add plugin to vite.config
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({ 
   plugins: [
     nodePolyfills(),
    ],
})

