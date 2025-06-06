import path from "path";
import { fileURLToPath } from "url";
import { release, version } from "os";
import { createServer } from "http";
import "./files/c.cjs";

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = import.meta.dirname;

export let unknownObject;

if (random > 0.5) {
  unknownObject = import("./files/a.json", { with: { type: "json" } });
} else {
  unknownObject = import("./files/b.json", { with: { type: "json" } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
