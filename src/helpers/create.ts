import path from "path";
import fs from "fs-extra";
import getPkgManager from "./getPkgManager";

const createProject = (projectName: string) => {
  const srcDir = `${path.resolve(__dirname)}/../../template`;
  const projectDir = `./${projectName}`;

  const pkgManager = getPkgManager();

  if (fs.existsSync(projectDir)) {
    console.log(`${projectName} already exists!`);
    process.exit(1);
  }

  fs.copySync(srcDir, projectDir);

  console.log(`${projectName} created successfully.`);
  console.log(`Next steps:`);
  console.log(`- cd ${projectName}`);
  console.log(`- ${pkgManager} install`);

  if (pkgManager === "yarn") {
    console.log(`- yarn dev`);
  } else if (pkgManager === "pnpm") {
    console.log(`- pnpm dev`);
  } else {
    console.log(`- npm run dev`);
  }
};

export default createProject;