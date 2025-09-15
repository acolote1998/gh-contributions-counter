import { fetchContributions } from "../fetchContributions";
export const getContributionsPerPeriodPerUser = async (
  githubUser: string,
  periodOne: string,
  periodTwo: string
) => {
  const fromDate = new Date(periodOne);
  const untilDate = new Date(periodTwo);
  const allContributions = await fetchContributions(githubUser);

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
