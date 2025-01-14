#!/bin/bash

# Check if an argument is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide a project name as an argument"
    echo "Usage: $0 <project_name>"
    exit 1
fi

PROJECT_NAME=$1

if [ -d "../guis/web/reactjs/vite" ]; then
  cd "../guis/web/reactjs/vite"
else
  echo "Directory does not exist, creating it..."
  mkdir -p "../guis/web/reactjs/vite"
  cd "../guis/web/reactjs/vite"
fi


# Execute the commands with the provided project name
echo "Creating new Vite project: $PROJECT_NAME"
bun create vite@latest $PROJECT_NAME --template react-ts

# Check if the previous command was successful
if [ $? -ne 0 ]; then
    echo "Failed to create Vite project"
    exit 1
fi

echo "Setting up project..."
cd "$PROJECT_NAME"

echo "Installing dependencies..."
bun install

echo "Installing Tailwind CSS..."
bun install -d tailwindcss postcss autoprefixer

echo "Initializing Tailwind CSS..."
bunx tailwindcss init -p

echo "Configuring Tailwind CSS..."
sed -i '1i @tailwind base;\n@tailwind components;\n@tailwind utilities;\n' ./src/index.css

echo "Updating Tailwind config..."
sed -i '/content: \[\]/c\  content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ],' tailwind.config.js

echo "Updating App.tsx..."
sed -i '/<div>/a \ \ \ \ <h1 className="text-3xl font-bold underline">Doctor Appointment</h1>' src/App.tsx

echo "Starting development server..."
bun run dev