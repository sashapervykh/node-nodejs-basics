import path from "node:path";
import fs from "node:fs/promises";

const rename = async () => {
  try {
    const isExist = await fs.access(
      path.join(import.meta.dirname, "files", "properFilename.md"),
      fs.constants.F_OK
    );
    if (!isExist) {
      throw new Error("FS operation failed");
    }
  } catch (err) {
    if (err.message === "FS operation failed") throw err;
  }

  try {
    await fs.rename(
      path.join(import.meta.dirname, "files", "wrongFilename.txt"),
      path.join(import.meta.dirname, "files", "properFilename.md")
    );
  } catch (err) {
    if (err.code === "ENOENT") throw new Error("FS operation failed");
    throw new Error(err);
  }
};

await rename();
