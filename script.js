const input = `












`;

const lines = input.split(/\r?\n/);
let results = "";
lines.forEach((line) => {
  if (line == "") return;
  const splitted = line.split("|");
  const field = splitted[1].trim();
  let type = getType(splitted[2].trim());
  const optional = splitted[4].trim() === "Optional" ? true : false;

  results += `${field}${optional ? "?" : ""}: ${type};\n`;
});

function getType(keyword) {
  switch (keyword) {
    case "string":
      return keyword;
    case "array":
      return "[]";
    case "int":
      return "number";
    case "bool":
      return "boolean";
    default:
      return "any";
  }
}

console.log(results);
