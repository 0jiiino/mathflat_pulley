import { problemMapper } from "./problemMapper";
import { instance } from "./requestConfig";

export const getProblemList = async () => {
  const { data } = await instance.get("/problems");

  return problemMapper(data);
};

export const getSimilarProblemList = async ({
  problemId,
  excludedIds,
}: {
  problemId: number;
  excludedIds: number[];
}) => {
  const { data } = await instance.get(
    `problems/${problemId}/similarity?excludedProblemIds=${excludedIds.join(",")}`
  );

  return problemMapper(data);
};
