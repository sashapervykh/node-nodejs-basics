import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  try {
    const fileContent = await fs.readFile(
      path.join(import.meta.dirname, "files", "fileToRead.txt"),
      { encoding: "utf-8" }
    );

    console.log(fileContent);
  } catch (err) {
    if (err.code === "ENOENT") throw new Error("FS operation failed");
    throw new Error(err);
  }
};

await read();
