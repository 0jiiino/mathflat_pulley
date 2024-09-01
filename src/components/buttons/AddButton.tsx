import { cloneDeep } from "lodash-es";
import { useQueryClient } from "@tanstack/react-query";

import { useActiveData } from "../../store/useActiveData";
import AddCircleIcon from "../icons/AddCircleIcon";
import { ProblemDataType } from "../../types/apiTypes";
import {
  ProblemMapperInterface,
  problemMapper,
} from "../../services/problemMapper";

export const AddButton = ({
  problemData,
}: {
  problemData: ProblemDataType;
}) => {
  const activeData = useActiveData((state) => state.activeData);

  const queryClient = useQueryClient();

  const handleAddList = (currentItem: ProblemDataType) => {
    // NOTE: 오른쪽 영역 (학습지 상세 편집 영역) 데이터 수정
    const { problemData } = queryClient.getQueryData([
      "problemList",
    ]) as ProblemMapperInterface;

    const swapProblemIndex = problemData.findIndex(
      (problem) => problem.id === activeData?.id
    );

    const newProblemList = cloneDeep(problemData).splice(
      swapProblemIndex - 1,
      1,
      currentItem
    );

    queryClient.setQueryData(["problemList"], () =>
      problemMapper(newProblemList)
    );

    // NOTE: 왼쪽 영역 (유사 문항) 데이터 수정
    const { problemData: similarData } = queryClient.getQueryData([
      "similarList",
    ]) as ProblemMapperInterface;

    const swapSimilarProblemIndex = similarData.findIndex(
      (problem) => problem.id === currentItem.id
    );

    const newSimilarList = cloneDeep(similarData).splice(
      swapSimilarProblemIndex,
      1
    );

    queryClient.setQueryData(["similarList"], () =>
      problemMapper(newSimilarList)
    );
  };

  return (
    <div
      className="flex gap-[4px] items-center min-w-fit"
      onClick={() => handleAddList(problemData)}
    >
      <AddCircleIcon backgroundColor={"#C0C0C0"} />
      <span className={"leading-[18px] text-[12px] font-normal text-[#959595]"}>
        추가
      </span>
    </div>
  );
};
