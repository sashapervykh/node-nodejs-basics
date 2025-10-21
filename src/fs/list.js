import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  try {
    const files = await fs.readdir(path.join(import.meta.dirname, "files"));
    console.log(files);
  } catch (err) {
    if (err.code === "ENOENT") throw new Error("FS operation failed");
    throw new Error(err);
  }
};

await list();
