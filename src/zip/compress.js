import { pipeline } from "node:stream/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { join } from "node:path";

const compress = async () => {
  const input = createReadStream(
    join(import.meta.dirname, "files", "fileToCompress.txt")
  );
  const output = createWriteStream(
    join(import.meta.dirname, "files", "archive.gz")
  );
  await pipeline(input, createGzip(), output);
};

await compress();
