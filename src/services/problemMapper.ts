import { ProblemDataType } from "../types/apiTypes";

type LevelDataType = {
  [key: string]: number;
};

export interface ProblemMapperInterface {
  problemData: ProblemDataType[];
  problemIdList: number[];
  levelData: LevelDataType;
}

export const problemMapper = (data: ProblemDataType[]) => {
  const levelData: LevelDataType = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
  };

  const problemIdList: number[] = [];

  data.map((problem) => {
    problemIdList.push(problem.id);

    const key = String(problem.level);
    levelData[key] = levelData[String(problem.level)] + 1;
  });

  return {
    problemData: data,
    problemIdList,
    levelData,
  };
};
