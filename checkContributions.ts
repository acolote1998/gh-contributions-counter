import { getContributionsPerPeriodPerUser } from "./api/util/getContributionsPerPeriod";
import { users } from "./api/util/listOfUsers";

const printContributions = async () => {
  //Uses the arguments of when we run the script. From Date, Until Date. Format is YYYY-MM-DD
  //Example: npm start -- 2025-09-15 2025-09-15
  const args = process.argv.slice(2);
  const fromDate = args[0];
  const untilDate = args[1];
  for (let i = 0; i < users.length; i++) {
    let name: string = users[i].name;
    const userContributions: number | undefined =
      await getContributionsPerPeriodPerUser(
        users[i].ghId,
        fromDate,
        untilDate
      );
    console.log(`${name}: ${userContributions}`);
  }
};

printContributions();
