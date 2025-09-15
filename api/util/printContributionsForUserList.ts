import { UserType } from "../../types/types";
import { getContributionsPerPeriodPerUser } from "./getContributionsPerPeriod";
import { users } from "./listOfUsers";

export const printContributionsForUserList = async () => {
  // Reads command-line arguments: start date and end date (format: YYYY-MM-DD)
  // Example usage: npm start -- 2025-09-15 2025-09-15

  const args = process.argv.slice(2);
  const fromDate = args[0];
  const untilDate = args[1];
  const completeUserList: UserType[] = [];

  let totalContributionsOfAllUsers: number = 0;

  for (let i = 0; i < users.length; i++) {
    let name: string = users[i].name;
    const userContributions: number = await getContributionsPerPeriodPerUser(
      users[i].ghId,
      fromDate,
      untilDate
    );
    completeUserList.push({
      ghId: users[i].ghId,
      name: users[i].name,
      contributions: userContributions,
    });
    totalContributionsOfAllUsers += userContributions;
  }
  completeUserList
    .sort((a, b) => (b.contributions ?? 0) - (a.contributions ?? 0))
    .forEach((user) => {
      let porcentOfContributions = 0;
      if (user.contributions) {
        porcentOfContributions = Math.round(
          (user.contributions * 100) / totalContributionsOfAllUsers
        );
      }
      console.log(
        `${user.name}:        ${user.contributions} -            ${porcentOfContributions}%`
      );
    });
};
