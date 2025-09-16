import { UserType } from "../types/types";
import { getContributionsPerPeriodPerUser } from "./getContributionsPerPeriod";
import userList from "../userList.json";

export const printContributionsForUserList = async () => {
  // Reads command-line arguments: start date and end date (format: YYYY-MM-DD)
  // Example usage: npm start -- 2025-09-15 2025-09-15

  const args = process.argv.slice(2);
  const fromDate = args[0];
  const untilDate = args[1];
  const completeUserList: UserType[] = [];

  let totalContributionsOfAllUsers: number = 0;

  console.log("-----------------------------------------------------");
  console.log(`     From ${fromDate} until ${untilDate}`);
  console.log("-----------------------------------------------------");
  const nameTitleCol = "       Name".padEnd(15, " ");
  const contribTitleCol = "Contributions".padStart(15, " ");
  const percentTitleCol = "% of Contributions".padStart(15, " ");
  console.log(`${nameTitleCol} | ${contribTitleCol} | ${percentTitleCol}`);
  console.log("-----------------------------------------------------");

  for (let i = 0; i < userList.length; i++) {
    const userContributions: number = await getContributionsPerPeriodPerUser(
      userList[i].ghId,
      fromDate,
      untilDate
    );
    completeUserList.push({
      ghId: userList[i].ghId,
      name: userList[i].name,
      contributions: userContributions,
    });
    totalContributionsOfAllUsers += userContributions;
  }
  completeUserList
    .sort((a, b) => (b.contributions ?? 0) - (a.contributions ?? 0))
    .forEach((user) => {
      let percentOfContributions = 0;
      if (user.contributions) {
        percentOfContributions = Math.round(
          (user.contributions * 100) / totalContributionsOfAllUsers
        );
      }

      const nameCol = user.name.padEnd(15, " ");
      const contribCol = String(user.contributions).padStart(15, " ");
      const percentCol = `${percentOfContributions}%`.padStart(15, " ");

      console.log(`${nameCol} | ${contribCol} | ${percentCol}`);
    });
};
