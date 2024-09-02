import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getSimilarProblemList } from "../../services/problemApi";
import { useActiveData } from "../../store/useActiveData";
import { ProblemMapperInterface } from "../../services/problemMapper";
import { SimilarProblemContainer } from "./SimilarProblemContainer";
import AddCircleIcon from "../icons/AddCircleIcon";

export const SimilarProblemList = () => {
  const activeData = useActiveData((state) => state.activeData);

  const { problemIdList } = useQueryClient().getQueryData([
    "problemList",
  ]) as ProblemMapperInterface;

  const { data, isLoading } = useQuery({
    queryKey: ["similarList"],
    queryFn: () =>
      getSimilarProblemList({
        problemId: activeData?.id as number,
        excludedIds: problemIdList,
      }),
    enabled: !!activeData?.id,
  });

  if (!activeData?.id || isLoading) return <PlaceHolder />;

  return (
    <section className="w-[480px] pc:w-[504px] bg-[#E8E8E8] rounded-[12px] flex flex-col px-[16px] pt-[17px] pb-[16px] gap-[16px]">
      <span className="flex tracking-[-1%] leading-[24px] text-[16px] font-bold text-white">
        유사 문항
      </span>

      <section className="customScrollBar w-full flex flex-col gap-[16px] overflow-x-hidden overflow-y-scroll">
        {data?.problemData.map((problem, index) => (
          <SimilarProblemContainer
            key={problem.id}
            problemData={problem}
            order={index + 1}
          />
        ))}
      </section>
    </section>
  );
};

const PlaceHolder = () => {
  return (
    <section className="w-[480px] pc:w-[504px] bg-[#E8E8E8] rounded-[12px] px-[16px] pt-[17px] pb-[16px] flex flex-col items-center justify-center gap-[4px]">
      <div className="leading-[21px] text-[14px] font-normal tracking-[-0.2%] text-[#333333] flex items-center gap-[6px]">
        <div className="bg-white flex items-center justify-center h-[24px] px-[6px] rounded-[2px] border-[0.6px] border-[#E0E0E0] gap-[1px] w-fit">
          <AddCircleIcon width={10} height={10} backgroundColor={"#C0C0C0"} />

          <span className="leading-[12px] text-[9px] font-normal text-[#959595]">
            유사문제
          </span>
        </div>
        {" 버튼을 누르면"}
      </div>

      <p className="leading-[21px] text-[14px] font-normal tracking-[-0.2%] text-[#333333]">
        {"문제를 추가 또는 교체할 수 있습니다."}
      </p>
    </section>
  );
};
