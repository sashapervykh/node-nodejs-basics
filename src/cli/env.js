const parseEnv = () => {
  const variables = [];
  for (const variable of Object.keys(process.env)) {
    if (variable.startsWith("RSS_")) {
      variables.push(`${variable}=${process.env[variable]}`);
    }
  }

  if (variables.length === 0) {
    console.log("There are no variables with RSS_ prefix");
    return;
  }

  console.log(variables.join("; "));
};

parseEnv();
