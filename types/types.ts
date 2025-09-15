export type ContributionsResponseType = {
  total: ContributionYears;
  contributions: ContributionObject[];
};
type ContributionYears = {
  2024?: number;
  2025?: number;
  2026?: number;
};

type ContributionObject = {
  date: string;
  count: number;
  level: number;
};
