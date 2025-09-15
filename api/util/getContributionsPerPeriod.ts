import { fetchContributions } from "../fetchContributions";
export const getContributionsPerPeriodPerUser = async (
  githubUser: string,
  periodOneYYYYMMDD: string,
  periodTwoYYYYMMDD: string
) => {
  const fromDate = new Date(periodOneYYYYMMDD);
  const untilDate = new Date(periodTwoYYYYMMDD);
  const allContributions = await fetchContributions(githubUser);
  if (allContributions === null) {
    return;
  }
  const filteredContributionsPerPeriod = allContributions.contributions.filter(
    (ctb) => {
      const ctbDate = new Date(ctb.date);
      return fromDate <= ctbDate && untilDate >= ctbDate;
    }
  );
  let contributions = 0;
  filteredContributionsPerPeriod.forEach((ctb) => {
    contributions += ctb.count;
  });
  return contributions;
};
