import path from "node:path";
import fs from "node:fs/promises";

const create = async () => {
  try {
    await fs.writeFile(
      path.join(import.meta.dirname, "files", "fresh.txt"),
      "I am fresh and young",
      { flag: "wx" }
    );
  } catch (err) {
    if (err.code === "EEXIST") throw new Error("FS operation failed");
    throw err;
  }
};

await create();
