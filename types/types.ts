export type ContributionsResponseType = {
  total: ContributionYears;
  contributions: ContributionObject[];
};
type ContributionYears = Record<number, number>;

type ContributionObject = {
  date: string;
  count: number;
  level: number;
};

export type UserType = {
  ghId: string;
  name: string;
  contributions?: number;
};
