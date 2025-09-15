import axios from "axios";
import { ContributionsResponseType } from "../types/types";

export const fetchContributions = async (
  githubUsername: string
): Promise<ContributionsResponseType> => {
  const contibutions: ContributionsResponseType = (
    await axios.get(
      `https://github-contributions-api.jogruber.de/v4/${githubUsername}`
    )
  ).data;
  return contibutions;
};
