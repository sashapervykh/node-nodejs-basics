import fs from "node:fs";
import path from "node:path";

const read = async () => {
  try {
    const files = fs.readdir(
      path.resolve(import.meta.dirname, "files"),
      { withFileTypes: true },
      (error, files) => {
        if (error) throw error;
        if (!files.some((elem) => elem.name === "fileToRead.txt")) {
          throw new Error("FS operation failed");
        }
        fs.readFile(
          path.resolve(import.meta.dirname, "files", "fileToRead.txt"),
          "utf-8",
          (error, data) => {
            if (error) throw new Error(error);
            console.log(data);
          }
        );
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

await read();
