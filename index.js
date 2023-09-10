/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
const { createInterface } = require("readline");
const familyTree = require("./familyTree");
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "family-tree>",
});

const commands = {
  ADD: "add",
  CONNECT: "connect",
  COUNT: "count",
  EXIT: "exit",
  SHOW: "show",
};

const processCommand = (input) => {
  const [command, ...args] = input.trim().split(" ");
  switch (command) {
    case commands.ADD:
      if (args[0] === "person") {
        const name = args.slice(1).join(" ");
        console.log(`Adding person: ${name}`);
        familyTree.addPerson(name);
      } else if (args[0] === "relationship") {
        const relationship = args.slice(1).join(" ");
        console.log(`Adding relationship: ${relationship}`);
        familyTree.addRelation(relationship);
      } else {
        console.log("Unknown add command:", args[1]);
      }
      break;

    case commands.CONNECT:
      // putting validation for minimum number of args which can be improved by checking the presence of string "as" and "of"
      if (args.length >= 5) {
        // eslint-disable-next-line no-unused-vars
        const relativeName = args.slice(0, args.indexOf("as")).join(" ");
        const relationship = args[args.indexOf("as") + 1];
        const userName = args.slice(args.indexOf("of") + 1).join(" ");
        console.log(
          `Connecting ${relativeName} as ${relationship} of ${userName}`
        );
        familyTree.updateRelation(userName, relationship, relativeName);
      } else {
        console.log(
          "Invalid connect command. Usage: connect <name1> as <relationship> of <name2>"
        );
      }
      break;

    case commands.COUNT:
      const indexOfOf = args.indexOf("of");
      const userName = args.slice(indexOfOf + 1).join(" ");
      if (args[0] === "sons") {
        familyTree.countRelative(userName, "son");
      } else if (args[0] === "daughters") {
        familyTree.countRelative(userName, "daughter");
      } else if (args[0] === "wives") {
        familyTree.countRelative(userName, "wife");
      } else {
        console.log(
          "Invalid connect command. Usage: count <relationName> of <person>"
        );
      }
      break;

    case commands.EXIT:
      readlineexi.close(); // Exit the readline interface
      break;

    case commands.SHOW:
      familyTree.show();
      break;

    default:
      console.log(`Unknown command: ${command}`);
      break;
  }
};

readline
  .on("line", (input) => {
    processCommand(input);
    readline.prompt();
  })
  .on("close", () => {
    console.log("Exiting the application.");
    process.exit(0);
  });

readline.prompt();
