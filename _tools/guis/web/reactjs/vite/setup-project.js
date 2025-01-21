import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Get the absolute path to the _tools folder, where the setup script is located
const TOOLS_PATH = path.dirname(__filename);

// Remove "/_tools" from the TOOLS_PATH to get the correct destination folder for the Vite project
const BASE_PROJECT_PATH = TOOLS_PATH.replace("/_tools", "");

// Log the ROOT_PATH to verify it's correct
console.log("ROOT_PATH: ", BASE_PROJECT_PATH);

// Validate input arguments
if (process.argv.length < 3) {
  console.error("Error: Please provide a project name as an argument");
  console.error("Usage: bun run setup-project.js <project_name>");
  process.exit(1);
}

const PROJECT_NAME = process.argv[2];
const PROJECT_PATH = path.join(BASE_PROJECT_PATH, PROJECT_NAME);

// Check if the project directory already exists
if (fs.existsSync(PROJECT_PATH)) {
  console.error(
    `Error: The project "${PROJECT_NAME}" already exists at ${BASE_PROJECT_PATH}`
  );
  process.exit(1);
}

// Change directory to the project directory
console.log(`Changing directory to ${BASE_PROJECT_PATH}`);
process.chdir(BASE_PROJECT_PATH);

// Create the Vite project
console.log(`Creating Vite project "${PROJECT_NAME}" in ${BASE_PROJECT_PATH}`);
execSync(`bun create vite@latest ${PROJECT_NAME} --template react-ts`, {
  stdio: "inherit",
});

// Install dependencies
console.log(`Installing dependencies for "${PROJECT_NAME}"`);
process.chdir(PROJECT_PATH);
execSync(`bun install`, { stdio: "inherit" });

// Initialize Tailwind CSS
console.log(`Installing Tailwind CSS for "${PROJECT_NAME}"`);
execSync(`bun install -d tailwindcss postcss autoprefixer`, {
  stdio: "inherit",
});

console.log(`Initializing Tailwind CSS for "${PROJECT_NAME}"`);
execSync(`bunx tailwindcss init -p`, { stdio: "inherit" });

console.log("Configuring Tailwind CSS...");
const indexCssPath = path.join(PROJECT_PATH, "src", "index.css");
// Read the current content of the file
const currentContent = fs.readFileSync(indexCssPath, "utf-8");
// Prepend the new content to the existing content
const newContent =
  "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n" +
  currentContent;
// Write the new content back to the file
fs.writeFileSync(indexCssPath, newContent, "utf-8");

const tailwindConfigPath = path.join(PROJECT_PATH, "tailwind.config.js");
const tailwindConfigContent = fs
  .readFileSync(tailwindConfigPath, "utf-8")
  .replace(
    /content: \[\]/,
    `content: [\n    "./index.html",\n    "./src/**/*.{js,ts,jsx,tsx}",\n  ]`
  );
fs.writeFileSync(tailwindConfigPath, tailwindConfigContent);

// Format the project name for display
const FORMATTED_PROJECT_NAME = PROJECT_NAME.replace(/_/g, " ").replace(
  /\b\w/g,
  (char) => char.toUpperCase()
);

console.log("Updating App.tsx...");
const appTsxPath = path.join(PROJECT_PATH, "src", "App.tsx");
const appTsxContent = fs
  .readFileSync(appTsxPath, "utf-8")
  .replace(
    /<div>/,
    `<div>\n    <h1 className="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME}</h1>`
  );
fs.writeFileSync(appTsxPath, appTsxContent);

console.log("Updating index.html...");
const indexHtmlPath = path.join(PROJECT_PATH, "index.html");
const indexHtmlContent = fs
  .readFileSync(indexHtmlPath, "utf-8")
  .replace(/<title>.*<\/title>/, `<title>${FORMATTED_PROJECT_NAME}</title>`);
fs.writeFileSync(indexHtmlPath, indexHtmlContent);

console.log("Starting development server...");
execSync("bun run dev", { stdio: "inherit" });
