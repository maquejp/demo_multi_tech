#!/bin/bash

# Check if an argument is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide a project name as an argument"
    echo "Usage: $0 <project_name>"
    exit 1
fi

PROJECT_NAME=$1
BASE_PATH="../guis/web/reactjs/vite"

if [ -d "$BASE_PATH" ]; then
  echo "Setting up project..."
  cd "$BASE_PATH"
else
  echo "Project directory does not exist, creating it..."
  mkdir -p "$BASE_PATH"
  cd "$BASE_PATH"
fi


# Execute the commands with the provided project name
echo "Creating new Vite project: $PROJECT_NAME"
bun create vite@latest "$PROJECT_NAME" --template react-ts

# Check if the previous command was successful
if [ $? -ne 0 ]; then
    echo "Failed to create Vite project"
    exit 1
fi

if [ -d "$PROJECT_NAME" ]; then

  # Format PROJECT_NAME: replace underscores with spaces and capitalize each word
  FORMATTED_PROJECT_NAME=$(echo "$PROJECT_NAME" | sed 's/_/ /g' | awk '{for (i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) substr($i,2)}1')

  cd "$PROJECT_NAME"
  echo "Setting up project..."

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
  sed -i "/<div>/a \ \ \ \ <h1 className=\"text-3xl font-bold underline\">$FORMATTED_PROJECT_NAME</h1>" src/App.tsx

  echo "Updating index.html..."
  sed -i "s|<title>.*</title>|<title>$FORMATTED_PROJECT_NAME</title>|" index.html

  echo "Starting development server..."
  bun run dev
else
  echo "Directory does not exist..."
fi