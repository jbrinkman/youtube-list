import { CommandModule } from "yargs";

export const ListCommand: CommandModule<{}, unknown> = {
  command: "list",

  describe: "List the videos in a playlist",

  builder: {
    debug: {
      alias: "d",
      describe:
        "Debug flag enables additional console logging with debug information.",
      type: "boolean",
    },
  },

  handler: (args: any) => {
    const { debug } = args;
    //@ts-ignore
    global.AppDebug = debug;
    console.debug({ title: "Intializing Api-Tests" });
    execute();
  },
};

const execute = () => {
  console.log("Running YouTube List");
};
