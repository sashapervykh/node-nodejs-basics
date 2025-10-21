import fs from "node:fs";
import path from "node:path";

const write = async () => {
  const stream = fs.createWriteStream(
    path.join(import.meta.dirname, "files", "fileToWrite.txt")
  );
  process.stdin.pipe(stream);
};

await write();
