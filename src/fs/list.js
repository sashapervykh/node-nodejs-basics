import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  try {
    const files = await fs.readdir(
      path.resolve(import.meta.dirname, "files"),
      { withFileTypes: true },
      (error) => {
        if (error) throw new Error("FS operation failed");
      }
    );

    console.log(files.map((elem) => elem.name));
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
