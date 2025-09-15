import { printContributionsForUserList } from "./api/util/printContributionsForUserList";
const run = () => {
  console.log("--------------------------------------------");
  console.log(" Name | Contributions | % of Contributions");
  console.log("--------------------------------------------");
  printContributionsForUserList();
};

run();
