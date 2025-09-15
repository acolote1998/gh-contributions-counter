import { getContributionsPerPeriodPerUser } from "./api/util/getContributionsPerPeriod";
import { users } from "./api/util/listOfUsers";

const printContributions = async () => {
  // Reads command-line arguments: start date and end date (format: YYYY-MM-DD)
  // Example usage: npm start -- 2025-09-15 2025-09-15

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
