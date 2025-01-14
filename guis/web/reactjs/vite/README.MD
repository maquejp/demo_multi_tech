# React with Vite

[React](https://react.dev/)

    "If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community."

- [Vite](https://vite.dev/)

## Prerequisites

    Vite requires Node.js version 18+ or 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

Vite Version (at the time of creating the application with the cli): 5.4.11
React Version (at the time of creating the application with the cli): 18.3.1

## Styling

It is using [Tailwindcss](https://tailwindcss.com/) [With Vite](https://tailwindcss.com/docs/guides/vite)

## Projects creation

```sh
bunx create vite@latest doctor_appointment --template react-ts
cd doctor_appointment
bun install
bun install -d tailwindcss postcss autoprefixer
bunx tailwindcss init -p
sed -i '1i @tailwind base;\n@tailwind components;\n@tailwind utilities;\n' ./src/index.css
sed -i '/content: \[\]/c\  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ],' tailwind.config.js
sed -i '/<div>/a \ \ \ \ <h1 className="text-3xl font-bold underline">Doctor Appointment</h1>' src/App.tsx
bun run dev
```
