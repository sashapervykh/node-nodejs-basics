import { fork } from "node:child_process";
import { join } from "node:path";

const spawnChildProcess = async (args) => {
  const childProcess = fork(
    join(import.meta.dirname, "files", "script.js"),
    args,
    { silent: true }
  );

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3, 4, 5, 6]);
