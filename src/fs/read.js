import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  try {
    const files = await fs.readdir(path.resolve(import.meta.dirname, "files"), {
      withFileTypes: true,
    });
    if (!files.some((elem) => elem.name === "fileToRead.txt")) {
      throw new Error("FS operation failed");
    }

    const data = await fs.readFile(
      path.resolve(import.meta.dirname, "files", "fileToRead.txt"),
      "utf-8"
    );

    console.log(data);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
