const parseEnv = () => {
  const args = process.env;

  const rssEnvVariables = Object.keys(args).filter((elem) =>
    elem.startsWith("RSS_")
  );
  const result = [];
  for (const env of rssEnvVariables) {
    result.push([env, args[env]]);
  }
  console.log(result.map((elem) => elem.join("=")).join("; "));
};

parseEnv();
