import fs from "node:fs";
import path from "node:path";

const create = async () => {
  try {
    const files = fs.readdir(
      path.resolve(import.meta.dirname, "files"),
      { withFileTypes: true },
      (error, files) => {
        if (error) throw error;
        if (files.some((elem) => elem.name === "fresh.txt")) {
          throw new Error("FS operation failed");
        }
        fs.writeFile(
          path.resolve(import.meta.dirname, "files", "fresh.txt"),
          "I am fresh and young",
          (error) => {
            if (error) throw new Error(error);
          }
        );
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

await create();
