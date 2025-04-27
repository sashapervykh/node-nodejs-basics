import fs from "node:fs";
import path from "node:path";

const rename = async () => {
  try {
    const files = fs.readdir(
      path.resolve(import.meta.dirname, "files"),
      { withFileTypes: true },
      (error, files) => {
        if (error) throw error;
        if (
          !files.some((elem) => elem.name === "wrongFilename.txt") ||
          files.some((elem) => elem.name === "properFilename.md")
        ) {
          throw new Error("FS operation failed");
        }
        fs.rename(
          path.resolve(import.meta.dirname, "files", "wrongFilename.txt"),
          path.resolve(import.meta.dirname, "files", "properFilename.md"),
          (error) => {
            if (error) throw err;
          }
        );
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

await rename();
