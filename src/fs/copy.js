import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  try {
    fs.access(
      path.resolve(import.meta.dirname, "files"),
      fs.constants.W_OK | fs.constants.R_OK,
      (error) => {
        if (error) throw new Error("FS operation failed");
        fs.access(
          path.resolve(import.meta.dirname, "files_copy"),
          fs.constants.W_OK | fs.constants.R_OK,
          (error) => {
            if (!error) {
              throw new Error("FS operation failed");
            } else {
              fs.cp(
                path.resolve(import.meta.dirname, "files"),
                path.resolve(import.meta.dirname, "files_copy"),
                (error) => {
                  if (error) throw error;
                }
              );
            }
          }
        );
      }
    );
  } catch (error) {
    throw error;
  }
};

await copy();
