const parseArgs = () => {
  const args = process.argv;
  const result = [];
  for (let i = 2; i < args.length; i += 2) {
    const prop = args[i].slice(2);
    result.push([prop, args[i + 1]]);
  }
  console.log(result.map((elem) => elem.join(" is ")).join(", "));
};

parseArgs();
