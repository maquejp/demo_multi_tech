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
execSync(`bun install -d tailwindcss @tailwindcss/vite`, {
  stdio: "inherit",
});

console.log("Configuring Tailwind CSS...");
const viteConfigPath = path.join(PROJECT_PATH, "vite.config.ts"); // Change to .js if needed

// Read the existing Vite config file
let viteConfigContent = fs.readFileSync(viteConfigPath, "utf-8");

let modified = false;

// Check if the import for Tailwind is already there
if (!viteConfigContent.includes("import tailwindcss from '@tailwindcss/vite'")) {
  console.log("Adding Tailwind CSS import...");
  viteConfigContent = `import tailwindcss from '@tailwindcss/vite';\n` + viteConfigContent;
  modified = true;
}

// Check if Tailwind is already in the plugins array
if (!viteConfigContent.includes("tailwindcss()")) {
  console.log("Adding Tailwind CSS to Vite plugins...");
  viteConfigContent = viteConfigContent.replace(
    /plugins:\s*\[\s*react\(\)\s*\]/,
    "plugins: [react(), tailwindcss()]"
  );
  modified = true;
}

// Save the modified file if changes were made
if (modified) {
  fs.writeFileSync(viteConfigPath, viteConfigContent, "utf-8");
  console.log("✅ Tailwind CSS has been added to vite.config.ts");
} else {
  console.log("⚡ Tailwind CSS is already present in vite.config.ts");
}

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
    `<div>\n    <h1 className="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME}</h1>\n\n`
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
