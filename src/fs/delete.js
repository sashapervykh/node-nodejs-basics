import fs from "node:fs/promises";
import path from "path";

const remove = async () => {
  try {
    await fs.rm(path.join(import.meta.dirname, "files", "fileToRemove.txt"));
  } catch (err) {
    if (err.code === "ENOENT") throw new Error("FS operation failed");
    throw err;
  }
};

await remove();
