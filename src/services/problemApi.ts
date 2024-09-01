import { instance } from "./requestConfig";

export const getProblemList = async () => {
  const data = await instance.get("/problems");

  return data;
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

  return data;
};
