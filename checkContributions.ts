import { printContributionsForUserList } from "./util/printContributionsForUserList";
import { checkIfArgumentsAreValid } from "./util/checkIfArgumentsAreValid";
import chalk from "chalk";

const run = () => {
  try {
    checkIfArgumentsAreValid();
  } catch (e) {
    console.error(
      chalk.bgRed(
        "\n\n                 Invalid arguments                   \n\n"
      )
    );
    console.warn("- Required date format: YYYY-MM-DD");
    console.warn("- The second date cannot be before the first date\n");
    console.info(
      "Try:         " +
        chalk.bgYellow.black("   npm start -- startDate untilDate     \n")
    );
    console.info(
      "Example:     " +
        chalk.bgGreen.black("   npm start -- 2025-03-18 2025-06-18   ")
    );
    console.error(
      chalk.bgRed(
        "\n\n                                                     \n\n"
      )
    );
    return;
  }
  printContributionsForUserList();
};

run();
