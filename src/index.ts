#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { ListCommand } from "./commands/index.js";

yargs(hideBin(process.argv)).command(ListCommand).demandCommand(1, "").argv;
