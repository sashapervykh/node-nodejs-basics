import { Transform } from "node:stream";

const transform = async () => {
  class ReverseTransform extends Transform {
    constructor(options) {
      super(options);
    }

    _transform(chunk, encoding, callback) {
      try {
        const resultString = chunk
          .toString("utf-8")
          .split("")
          .reverse()
          .join("");
        callback(null, resultString);
      } catch (err) {
        callback(err);
      }
    }
  }
  const reverseTransform = new ReverseTransform();
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
