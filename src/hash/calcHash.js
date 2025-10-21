import { createReadStream } from "node:fs";
import { join } from "path";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const fileContent = createReadStream(
    join(import.meta.dirname, "files", "fileToCalculateHashFor.txt")
  );

  let result = "";

  fileContent.pipe(hash);

  hash.setEncoding("hex");

  hash.on("data", (chunk) => {
    result += chunk;
  });

  hash.on("end", () => {
    console.log(result);
    process.exit();
  });
};

await calculateHash();
