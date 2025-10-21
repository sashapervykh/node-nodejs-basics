import { Worker } from "node:worker_threads";
import path from "node:path";
import os from "node:os";

const performCalculations = async () => {
  const cpusAmount = os.availableParallelism();
  const promises = Array.from({ length: cpusAmount })
    .fill(null)
    .map((_, index) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(import.meta.dirname, "worker.js"), {
          workerData: 10 + index,
        });
        worker.on("message", (message) => {
          resolve({ status: "resolved", data: message });
        });
        worker.on("error", () => {
          resolve({ status: "error", data: null });
        });
      });
    });

  const result = await Promise.all(promises);
  console.log(result);
};

await performCalculations();
