import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  try {
    const accessToFiles = await fs.access(
      path.resolve(import.meta.dirname, "files"),
      fs.constants.W_OK | fs.constants.R_OK
    );
    let accessToCopy;

    try {
      accessToCopy = await fs.access(
        path.resolve(import.meta.dirname, "files_copy"),
        fs.constants.W_OK | fs.constants.R_OK
      );
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }

    await fs.mkdir(path.resolve(import.meta.dirname, "files_copy"));
    const files = await fs.readdir(path.resolve(import.meta.dirname, "files"), {
      withFileTypes: true,
    });
    files.forEach((file) => {
      fs.copyFile(
        path.resolve(import.meta.dirname, "files", file.name),
        path.resolve(import.meta.dirname, "files_copy", file.name)
      );
    });
  } catch (error) {
    if (error) throw new Error("FS operation failed");
  }
};

await copy();
