import { useQueryClient } from "@tanstack/react-query";
import { cloneDeep } from "lodash-es";

import { useActiveData } from "../../store/useActiveData";
import {
  ProblemDataType,
  ProblemMapperInterface,
  problemMapper,
} from "../../services/problemMapper";
import SwapHorizIcon from "../icons/SwapHorizIcon";

export const SwapHorizButton = ({
  problemData,
}: {
  problemData: ProblemDataType;
}) => {
  const queryClient = useQueryClient();

  const { activeData, setActiveData } = useActiveData();

  const handleSwapClick = (currentItem: ProblemDataType) => {
    // NOTE: 오른쪽 영역 (학습지 상세 편집 영역) 데이터 수정
    const { problemData } = queryClient.getQueryData([
      "problemList",
    ]) as ProblemMapperInterface;

    const swapProblemIndex = problemData.findIndex(
      (problem) => problem.id === activeData?.id
    );

    const newProblemList = cloneDeep(problemData).with(
      swapProblemIndex,
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

    const newSimilarList = cloneDeep(similarData).with(
      swapSimilarProblemIndex,
      activeData as ProblemDataType
    );

    queryClient.setQueryData(["similarList"], () =>
      problemMapper(newSimilarList)
    );

    // NOTE: active 데이터 변경
    setActiveData(currentItem);
  };

  return (
    <div
      className="flex gap-[4px] items-center min-w-fit cursor-pointer"
      onClick={() => handleSwapClick(problemData)}
    >
      <SwapHorizIcon />
      <span className="leading-[18px] text-[12px] font-normal text-[#959595]">
        교체
      </span>
    </div>
  );
};
