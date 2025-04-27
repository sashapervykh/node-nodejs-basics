import fs from "node:fs/promises";
import path from "node:path";

const remove = async () => {
  try {
    const files = await fs.readdir(
      path.resolve(import.meta.dirname, "files"),
      { withFileTypes: true },
      (error) => {
        if (error) throw error;
      }
    );

    if (!files.some((elem) => elem.name === "fileToRemove.txt")) {
      throw new Error("FS operation failed");
    }
    fs.rm(
      path.resolve(import.meta.dirname, "files", "fileToRemove.txt"),
      {},
      (error) => {
        if (error) throw new Error(error);
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

await remove();
