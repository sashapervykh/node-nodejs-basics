import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { join } from "node:path";
import { pipeline } from "node:stream/promises";

const decompress = async () => {
  const input = createReadStream(
    join(import.meta.dirname, "files", "archive.gz")
  );
  const output = createWriteStream(
    join(import.meta.dirname, "files", "fileToCompress.txt")
  );
  await pipeline(input, createUnzip(), output);
};

await decompress();
