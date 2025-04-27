import fs from "node:fs";
import path from "node:path";

const list = async () => {
  try {
    const files = fs.readdir(
      path.resolve(import.meta.dirname, "files"),
      { withFileTypes: true },
      (error, files) => {
        if (error) throw new Error("FS operation failed");
        console.log(files.map((elem) => elem.name));
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

await list();
