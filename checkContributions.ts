import { getContributionsPerPeriodPerUser } from "./api/util/getContributionsPerPeriod";

const test = async () => {
  const contributions = await getContributionsPerPeriodPerUser(
    "acolote1998",
    "2025-09-15",
    "2025-09-15"
  );
  console.log(contributions);
};

test();
