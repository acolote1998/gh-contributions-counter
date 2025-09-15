import { fetchContributions } from "./api/fetchContributions";
const test = async () => {
  const contributions = await fetchContributions("acolote1998");
  console.log(contributions.total[2025]);
};

test();
