import { open } from "node:fs/promises";
import path from "node:path";

const read = async () => {
  const fd = await open(
    path.join(import.meta.dirname, "files", "fileToRead.txt")
  );
  const stream = fd.createReadStream();
  let result = "";
  stream.on("data", (chunk) => {
    result += chunk;
  });
  stream.on("end", () => {
    console.log(result);
    process.exit();
  });
};

await read();
