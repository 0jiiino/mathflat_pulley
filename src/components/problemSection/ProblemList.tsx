import { useQuery, useQueryClient } from "@tanstack/react-query";

import { ProblemContainer } from "./ProblemContainer";
import { ProblemMapperInterface } from "../../services/problemMapper";
import { getProblemList } from "../../services/problemApi";

export const ProblemList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["problemList"],
    queryFn: () => getProblemList(),
  });

  if (isLoading) return null;

  return (
    <section className="w-[480px] bg-[#5C5C5C] rounded-[12px] flex flex-col gap-[16px] px-[16px] pt-[17px]">
      <span className="flex tracking-[-1%] leading-[24px] text-[16px] font-bold text-white">
        학습지 상세 편집
      </span>

      <section className="customScrollBar w-full flex flex-col gap-[16px] overflow-x-hidden overflow-y-scroll">
        {data?.problemData?.map((problem, index) => (
          <ProblemContainer
            key={problem.id}
            problemData={problem}
            order={index + 1}
          />
        ))}
      </section>

      <footer className="flex justify-end py-[20px] pr-[24px] tracking-[-1%]">
        <span className="leading-[24px] text-[16px] font-normal text-white">
          <span className="text-[12px] opacity-50">
            {`하${data?.levelData[1]} · 중하${data?.levelData[2]} · 중${data?.levelData[3]} · 상${data?.levelData[4]} · 최상${data?.levelData[5]}`}
          </span>
          <span className="opacity-50">{" | "}</span>
          {`문제 수 ${data?.problemData.length} 개`}
        </span>
      </footer>
    </section>
  );
};
