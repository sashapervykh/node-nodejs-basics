import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const src = path.join(import.meta.dirname, "files");
  const dest = path.join(import.meta.dirname, "files_copy");
  try {
    await fs.cp(src, dest, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (err) {
    if (err.code === "ENOENT" || err.code === "ERR_FS_CP_EEXIST")
      throw new Error("FS operation failed");
  }
};

await copy();
